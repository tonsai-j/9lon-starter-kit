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
        ${bulmaStyles()}
        <li>
                <a>
                    <span>Music</span>
                </a>
            </li>
      `;
  }
}
customElements.define("my-tab", MyTab);
