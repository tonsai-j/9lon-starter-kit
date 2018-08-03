import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class MyTab extends LitElement {
  static get properties() {
    return {
      x: String
    };
  }
  _render() {
    return html`
        <!-- ${bulmaStyles()} -->
        <style>
        </style>
        <li><a><slot></slot></a></li>
      `;
  }
}
customElements.define("my-tab", MyTab);
