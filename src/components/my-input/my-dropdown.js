import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class Dropdown extends LitElement {
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
  _render({
    classnylon,
    id,
    ariaLabelledBy,
    ariaDescribedBy,
    disabled,
    name,
    placeholder,
    readonly,
    required,
    seleted,
    seletevalue
  }) {
    return html`
    ${bulmaStyles()}
    <div class$="select ${classnylon}"
        id$="${id}"
        aria-labelledby$="${ariaLabelledBy}"
        aria-describedby$="${ariaDescribedBy}"
        disabled$="${disabled}"
        placeholder$="${placeholder}"
        name$="${name}"
        readonly$="${readonly}"
        required$="${required}"
        oninput="${this._changeValue}"
        >
        <select value$="${seleted}">
            ${seletevalue.map(({ label, value }) => {
              return html`<option value="${value}">${label}</option>`;
            })}
        </select>
    </div>

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

customElements.define("my-dropdown", Dropdown);