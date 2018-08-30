import {LitElement, html, property} from '@polymer/lit-element';
import bulmaStyles from "../../style/bulma-styles";

class MyFile extends LitElement {
  static get properties() {
    return {
      classnylon: String,
      seleted: "",
      id: "",
      ariaLabelledBy: String,
      ariaDescribedBy: String,
      disabled: Boolean,
      name: String,
      placeholder: String,
      readonly: Boolean,
      required: Boolean,
      seletevalue: Array
    };
  }
  constructor() {
    super();
    this.seletevalue =[]
    this._changeValue = this._changeValue.bind(this);
  }
  render() {
    return html`
    ${bulmaStyles(this)}


    `;
  }
  _changeValue(e) {
    // const element = this.shadowRoot.querySelector("select")
    // const children = element.children;
    // console.log(element);
    let value = this.shadowRoot.querySelector("select").value;
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

customElements.define("my-file", MyFile);
