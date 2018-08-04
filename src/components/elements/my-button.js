import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
class MyButton extends LitElement {
  static get properties() {
    return {
      classnylon: String,
      id: "",
      disabled: Boolean
    };
  }
  _render({ classnylon, disabled }) {
    return html`
        ${bulmaStyles()}
        <button class$="button ${classnylon}" disabled="${disabled}">
            <slot></slot>
        </button>
    
        `;
  }
}
customElements.define("my-button", MyButton);
