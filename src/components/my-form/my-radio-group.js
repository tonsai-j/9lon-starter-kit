import { LitElement, html } from "@polymer/lit-element";
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
      disabled: Boolean,
      name: String,
      readonly: Boolean,
      required: Boolean
    };
  }
  constructor() {
    super();
    this._activeRadio = this._activeRadio.bind(this);
  }
  _render({ id  }) {
    return html`
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
        if (attributes.length > 0) {
          for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
              const { nodeName, nodeValue } = attributes[key];
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
        if (this.disabled) {
          // label.setAttribute("disabled", this.disabled);
          input.setAttribute("disabled", this.disabled);
        }
      }
    }
  }
  _setRenderRadio() {
    if (this.element) {
      let children = this.element.children;
      for (const key in children) {
        if (children.hasOwnProperty(key)) {
          const element = children[key];
          if (this.disabled) {
            element.setAttribute("disabled", "");
          } else {
            element.removeAttribute("disabled");
          }
        }
      }
    }
  }
  _shouldRender(props, changedProps, prevProps) {
    if ("disabled" in changedProps) {
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
    // console.log(value);
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        bubbles: true,
        composed: true,
        detail: { value: value }
      })
    );
  }
}

customElements.define("my-radio-group", MyRadioGroup);