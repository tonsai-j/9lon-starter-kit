import {LitElement, html, property} from '@polymer/lit-element';
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
      disablednylon: "",
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
  render() {
    return html`
    ${bulmaStyles(this)}
    <textarea 
        class="textarea ${this.classnylon}"
        id="${this.id}"
        aria-labelledby="${this.ariaLabelledBy}"
        aria-describedby="${this.ariaDescribedBy}"
        .value="${this.value}"
        invalid="${this.invalid}"
        validator="${this.validator}"
        .disabled="${this.disablednylon}"
        autocomplete="${this.autocomplete}"
        autofocus="${this.autofocus}"
        inputmode="${this.inputmode}"
        name="${this.name}"
        placeholder="${this.placeholder}"
        .readonly="${this.readonly}"
        required="${this.required}"
        minlength="${this.minlength}"
        maxlength="${this.maxlength}"
        autocapitalize="${this.autocapitalize}"
        rows="${this.rows}"
        max-rows="${this.maxRows}"
        @input="${this._changeValue}"
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
