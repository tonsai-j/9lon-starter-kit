import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class MyTabs extends LitElement {
  static get properties() {
    return {
      selected: String,
      tabs: Array,
      whales: Number,
      element: Object
    };
  }
  constructor() {
    super();
    this.selected = "";
    // this.tabs = [
    //   {
    //     name: "ข้อมูลส่วนตัว"
    //   },
    //   {
    //     name: "อัพโหลดเอกสาร"
    //   },
    //   {
    //     name: "รายงาน"
    //   }
    // ];
    this.tabs = [];
    this.element = {};
    this.activeTab = this.activeTab.bind(this);
  }
  _render() {
    return html`
      ${bulmaStyles()}
      
      <div class="tabs is-boxed">
        <ul>
        </ul>
    </div>
      `;
  }
  _firstRendered() {
    let ul = this.shadowRoot.querySelector("ul");
    this.element = ul;
    const children = this.children;
    let li = "";
    let aHref = "";
    let spanText = "";
    let text = "";
    for (const key in children) {
      if (children.hasOwnProperty(key)) {
        const element = children[key];
        let attributes = element.attributes;
        // สร้าง
        li = document.createElement("li");
        aHref = document.createElement("a");
        spanText = document.createElement("span");
        text = document.createTextNode(element.innerText);

        // ใส่ attribute เข้าไป
        if (attributes.length > 0) {
          for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
              const {nodeName,nodeValue} = attributes[key];
              spanText.setAttribute([nodeName.replace("nylon", "")], nodeValue);
            }
          }
        }
        // เอาฝั่งเข้าไป
        spanText.appendChild(text);
        aHref.appendChild(spanText);
        li.appendChild(aHref);
        ul.appendChild(li);
        // // เพิ่ม event
        li.addEventListener("click", this.activeTab);
        li.setAttribute("id", key);
        if (this.selected === key) {
          li.setAttribute("class", "is-active");
        }
      }
    }
    // console.log(children);
  }
  // _didRender(props, changedProps, prevProps){
  //   console.log(this);

  // }
  //   _shouldRender(props, changedProps, prevProps) {
  //     console.log(this.tabs);
  //     return true;
  //   }
  async activeTab(e) {
    //   เป็นสตริงต้องแปลงเป็นตัวเลขก่อน
    const id = e.currentTarget.id;
    this.selected = id;
    let children = this.element.children;
    for (const key in children) {
      if (children.hasOwnProperty(key)) {
        const element = children[key];
        if (id === key) {
          element.setAttribute("class", "is-active");
        } else {
          element.removeAttribute("class");
        }
      }
    }
    this.dispatchEvent(
      new CustomEvent("tab-selected", {
        bubbles: true,
        composed: true,
        detail: { value: id }
      })
    );
  }
}
customElements.define("my-tabs", MyTabs);
