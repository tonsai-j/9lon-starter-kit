import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
class footerTwo extends LitElement {
  _render() {
    return html`
    ${bulmaStyles()}
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                สามารถใช้งานได้บนบราวเซอร์ Google Chrome 30 <br>
                    Copyright(c)2018 กระทรวงพาณิชย์ กรมการค้าต่างประเทศ <br>
            </div>
        </footer>
            `;
  }
}
customElements.define("footer-two", footerTwo);
