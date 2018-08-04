import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class MyTextArea extends LitElement {
  static get properties() {
    return {
      classnylon: String,
      id: "",
      ariaLabelledBy: "",
      ariaDescribedBy: "",
      value: "",
      invalid: "",
      validator: "",
      disabled: "",
      autocomplete: "",
      autofocus: "",
      inputmode: "",
      name: "",
      placeholder: "",
      readonly: "",
      required: "",
      minlength: "",
      maxlength: "",
      autocapitalize: "",
      rows: "",
      maxRows: ""
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
    value,
    invalid,
    validator,
    disabled,
    autocomplete,
    autofocus,
    inputmode,
    name,
    placeholder,
    readonly,
    required,
    minlength,
    maxlength,
    autocapitalize,
    rows,
    maxRows
  }) {
    return html`
    ${bulmaStyles()}
    <textarea 
        class$="textarea ${classnylon}"
        id$="${id}"
        aria-labelledby$="${ariaLabelledBy}"
        aria-describedby$="${ariaDescribedBy}"
        value="${value}"
        invalid="${invalid}"
        validator$="${validator}"
        disabled$="${disabled}"
        autocomplete$="${autocomplete}"
        autofocus$="${autofocus}"
        inputmode$="${inputmode}"
        name$="${name}"
        placeholder$="${placeholder}"
        readonly$="${readonly}"
        required$="${required}"
        minlength$="${minlength}"
        maxlength$="${maxlength}"
        autocapitalize$="${autocapitalize}"
        rows$="${rows}"
        max-rows$="${maxRows}"
        oninput="${this._changeValue}"
    ></textarea>

    `;
  }
  _changeValue(e) {
    let value = e.currentTarget.value;
    switch (this.type) {
      case "Number":
        value = Number(value);
        break;
      default:
        value = value;
        break;
    }

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

customElements.define("my-textarea", MyTextArea);
