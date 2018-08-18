import {
  LitElement,
  html
} from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class MyRadioGroup extends LitElement {
  static get properties() {
    return {
      element: String,
      classnylon: String,
      checked: Boolean,
      id: "",
      ariaLabelledBy: String,
      ariaDescribedBy: String,
      disablednylon: Boolean,
      name: String,
      readonly: Boolean,
      required: Boolean
    };
  }
  constructor() {
    super();
    this._activeRadio = this._activeRadio.bind(this);
  }
  _render({
    id
  }) {
    return html `
    ${bulmaStyles()}
    
    <div class="field">
      <!-- <input class="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" checked="checked">
      <label for="exampleRadioInline1">Option 1</label>
      <input class="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline">
      <label for="exampleRadioInline2">Option 2</label> -->
    </div>
    `;
  }
  // <div class="control" id$="${id}">
  //   </div>
  _firstRendered() {
    let control = this.shadowRoot.querySelector(".field");
    this.element = control;
    const children = this.children;
    let label = "";
    let input = "";
    let text = "";
    // // console.log(control,children);
    for (const key in children) {
      if (children.hasOwnProperty(key)) {
        const element = children[key];
        // console.log(element);
        let attributes = element.attributes;
        // สร้าง
        label = document.createElement("label");
        input = document.createElement("input");
        text = document.createTextNode(element.innerText);
        // console.log(text);
        // ใส่ attribute เข้าไป
        if (attributes) {
          if (attributes.length > 0) {
            for (const key in attributes) {
              if (attributes.hasOwnProperty(key)) {
                const {
                  nodeName,
                  nodeValue
                } = attributes[key];
                // console.log(nodeName, nodeValue );
                // label.setAttribute([nodeName.replace("nylon", "")], nodeValue);
                input.setAttribute([nodeName.replace("nylon", "")], nodeValue);
                input.setAttribute('id', nodeValue);
                label.setAttribute('for', nodeValue);
                if (nodeName === "value" && nodeValue === this.checked) {
                  input.setAttribute("checked", "");
                } else {
                  input.removeAttribute("checked");
                }
              }
            }
          }

          input.setAttribute("type", "radio");
          input.setAttribute("class", "is-checkradio");
          input.setAttribute("name", this.name);
          // เอาฝั่งเข้าไป
          // input.appendChild(label);
          label.appendChild(text);
          // console.log(input);
          // console.log(label);
          control.appendChild(input);
          control.appendChild(label);
          // เพิ่ม event
          input.addEventListener("click", this._activeRadio);
          // disabled
          if (this.disablednylon) {
            // label.setAttribute("disabled", this.disabled);
            input.setAttribute("disabled", this.disablednylon);
          }
        }
      }
    }
  }
  _setRenderRadio() {
    if (this.element) {
      let children = this.element.children;
      // ใช้ for ธรรมดาแก้ปัญหา edgs และ ie วน for in ได้ไม่ครบ
      for (let index = 0; index < children.length; index++) {
        const element = children[index];
        // typeof element เช็คว่าไม่ใช่ฟั่งชั่น firefox
        if (element.nodeName === 'INPUT' && typeof element !== 'function') {
          if (this.disablednylon) {
            element.setAttribute("disabled", "");
          } else {
            element.removeAttribute("disabled");
          }
        }
      }
      // for (const key in children) {
      //   console.log('key',key);

      // //   if (children.hasOwnProperty(key)) {
      //     const element = children[key];
      //     console.log('element',element);
      // //     // เช็คว่าไม่ใช่ฟั่งชั่น firefox
      // //     if (typeof element !== 'function') {
      // //       if (this.disablednylon) {
      // //         element.setAttribute("disabled", "");
      // //       } else {
      // //         element.removeAttribute("disabled");
      // //       }
      // //     }
      // //   }
      // }
    }
  }
  _shouldRender(props, changedProps, prevProps) {
    // console.log(props, changedProps, prevProps);
    if ("disablednylon" in changedProps) {
      // console.log(props, changedProps, prevProps);
      this._setRenderRadio();
      return true;
    } else {
      return false;
    }
  }
  async _activeRadio(e) {
    const value = e.currentTarget.getAttribute("value");
    this.checked = value;
    const elements = this.element
    const children = elements.children
    // console.log(element);
    for (const key in children) {
      if (children.hasOwnProperty(key)) {
        const element = children[key];
        // เช็คว่าเป็น INPUT เพื่อเปลี่ยนค่า checked
        if (typeof element !== 'function') {
          if (element.nodeName === 'INPUT') {
            if (element.getAttribute("value") === this.checked) {
              element.setAttribute("checked", "");
            } else {
              element.removeAttribute("checked");
            }
          }
        }

      }
    }
    // console.log(children);


    // console.log(value);
    await this.requestRender();
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        bubbles: true,
        composed: true,
        detail: {
          value: value
        }
      })
    );
  }
}

customElements.define("my-radio-group", MyRadioGroup);