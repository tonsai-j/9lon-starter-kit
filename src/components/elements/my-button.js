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
  render() {
    return html`
        ${bulmaStyles(this)}
        <button class="button ${this.classnylon}" disabled="${this.disablednylon}">
            <slot></slot>
        </button>
    
        `;
  }
}
customElements.define("my-button", MyButton);
