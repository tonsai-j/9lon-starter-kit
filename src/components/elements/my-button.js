import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
class MyButton extends LitElement {
  static get properties() {
    return {
      classnylon: String,
      id: "",
      disablednylon: Boolean
    };
  }
  _render({ classnylon, disablednylon }) {
    return html`
        ${bulmaStyles(this)}
        <button class$="button ${classnylon}" disabled="${disablednylon}">
            <slot></slot>
        </button>
    
        `;
  }
}
customElements.define("my-button", MyButton);
