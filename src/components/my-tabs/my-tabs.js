import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class MyTabs extends LitElement {
  static get properties() {
    return {
      selected: String,
      tabs: Array,
      whales: Number
    };
  }
  constructor() {
    super();
    this.selected = "";
    this.tabs = [
      {
        name: "ข้อมูลส่วนตัว"
      },
      {
        name: "อัพโหลดเอกสาร"
      },
      {
        name: "รายงาน"
      }
    ];
    this.activeTab = this.activeTab.bind(this);
  }
  _render({ selected, tabs }) {
    return html`
      ${bulmaStyles()}
      
      <div class="tabs is-boxed">
        <ul>
            ${tabs.map(({ name, active }, index) => {
              return html`
                <li id$=${index} class$=${
                active ? "is-active" : ""
              } on-click="${this.activeTab}">
                <a>
                    <span>${name}</span>
                </a>
            </li>
                `;
            })}
        </ul>
    </div>
      `;
  }
  _firstRendered() {
    if (this.tabs.length > 0) {
      let round = this.selected || 0;
      this.tabs[round] = Object.assign(this.tabs[round], { active: true });
      this.tabs = this.tabs.slice(0);
    }
  }
  //   _shouldRender(props, changedProps, prevProps) {
  //     console.log(this.tabs);
  //     return true;
  //   }
  async activeTab(e) {
    //   เป็นสตริงต้องแปลงเป็นตัวเลขก่อน
    const id = Number(e.currentTarget.id);
    this.selected = id;
    this.tabs.forEach((el, index) => {
      if (index === id) {
        el = Object.assign(el, { active: true });
      } else {
        el = Object.assign(el, { active: false });
      }
    });
    this.tabs = this.tabs.slice(0);
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
