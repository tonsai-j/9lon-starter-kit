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
  _render({
    classnylon,
    id,
    ariaLabelledBy,
    ariaDescribedBy,
    disablednylon,
    name,
    readonly,
    required,
    checked
  }) {
    return html `
    ${bulmaStyles()}
    <div id="${id}" class="field">
  <input class$="is-checkradio ${classnylon}" id="exampleCheckbox" type="checkbox" name$="${name}" 
                checked="${checked}"
                aria-labelledby$="${ariaLabelledBy}"
                aria-describedby$="${ariaDescribedBy}"
                disabled="${disablednylon}"
                readonly$="${readonly}"
                required$="${required}"
                oninput="${this._changeValue}"
  >
  <label for$="${name}"><slot></slot></label>
</div>
 
    `;
  }
  //   <label class$="checkbox ${classnylon}"
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
    // const element = this.shadowRoot.querySelector("select")
    // const children = element.children;
    let value = this.shadowRoot.querySelector("input").checked;

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