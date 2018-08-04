import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class MyCheckbox extends LitElement {
  static get properties() {
    return {
      classnylon: String,
      checked: Boolean,
      id: "",
      ariaLabelledBy: String,
      ariaDescribedBy: String,
      disabled: Boolean,
      name: String,
      placeholder: String,
      readonly: Boolean,
      required: Boolean
    };
  }
  constructor() {
    super();
    this._changeValue = this._changeValue.bind(this);
  }
  _render({
    classnylon,
    id,
    ariaLabelledBy,
    ariaDescribedBy,
    disabled,
    name,
    readonly,
    required,
    checked
  }) {
    return html`
    ${bulmaStyles()}
    <label class$="checkbox ${classnylon}"
            disabled="${disabled}">
        <input type="checkbox" 
                checked="${checked}"
                id$="${id}"
                name$="${name}"
                aria-labelledby$="${ariaLabelledBy}"
                aria-describedby$="${ariaDescribedBy}"
                disabled="${disabled}"
                readonly$="${readonly}"
                required$="${required}"
                oninput="${this._changeValue}"
        >
         <slot></slot>
        </label>
    `;
  }
  _changeValue(e) {
    // const element = this.shadowRoot.querySelector("select")
    // const children = element.children;
    // console.log(element);
    let value = this.shadowRoot.querySelector("input").checked;
    // switch (this.type) {
    //   case "Number":
    //     value = Number(value);
    //     break;
    //   default:
    //     value = value;
    //     break;
    // }

    this.dispatchEvent(
      new CustomEvent("value-changed", {
        bubbles: true,
        composed: true,
        detail: { value: value }
      })
    );
  }
}

customElements.define("my-checkbox", MyCheckbox);
