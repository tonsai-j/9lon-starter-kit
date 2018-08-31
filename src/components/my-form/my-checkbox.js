import {
  LitElement,
  html
} from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
// ไม่สามมรถใช้ disabled ธรรมดาได้ เนื่องจากจะทำให้ ie ไม่รู้จัก ต้องใช้คำอื่นแทน
class MyCheckbox extends LitElement {
  static get properties() {
    return {
      classnylon: String,
      checked: Boolean,
      id: "",
      ariaLabelledBy: String,
      ariaDescribedBy: String,
      disablednylon: Boolean,
      name: String,
      placeholder: String,
      readonly: Boolean,
      required: Boolean,
    };
  }
  constructor() {
    super();
    this._changeValue = this._changeValue.bind(this);
    this.readonly = false;
    this.required = false;
    this.checked = false;
    this.disablednylon = false;
    this.id = 'checkbox';
    this.name = 'checkbox';
  }
  render() {
    return html `
    ${bulmaStyles(this)}
    <div id="${this.id}" class="field">
  <input class="is-checkradio ${this.classnylon}" id="exampleCheckbox" type="checkbox" .name="${this.name}" 
                checked="${this.checked}"
                aria-labelledby="${this.ariaLabelledBy}"
                aria-describedby="${this.ariaDescribedBy}"
                .disabled="${this.disablednylon}"
                .readonly="${this.readonly}"
                required="${this.required}"
                @click="${this._changeValue}"
  >
  <label for="${this.name}" ><slot @click="${this._changeValue}"></slot></label>
</div>
 
    `;
  }
  //   <label .class="checkbox ${classnylon}"
  //   disabled="${disabled}">
  // <input type="checkbox" 

  // >
  // <slot></slot>
  // </label>
  // _shouldRender(props, changedProps, prevProps) {
  //   // if ("disabled" in changedProps) {
  //     console.log(props, changedProps, prevProps);
  //     // this._setRenderRadio();
  //     return true;
  //   // } else {
  //   //   return false;
  //   // }
  // }
  _changeValue(e) {
    // console.log('value',e)
    // const element = this.shadowRoot.querySelector("select")
    // const children = element.children;
    let value = this.shadowRoot.querySelector("input").checked;
    // console.log('value',value)
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

customElements.define("my-checkbox", MyCheckbox);