import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
class footerTwo extends LitElement {
  _render() {
    return html`
    ${bulmaStyles()}
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
            `;
  }
}
customElements.define("footer-two", footerTwo);
