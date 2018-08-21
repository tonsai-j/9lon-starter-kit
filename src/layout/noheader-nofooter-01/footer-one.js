import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
import ownStyle from "../../style/own-style";
class footerOne extends LitElement {
  _render() {
    return html`
    ${bulmaStyles(this)}
             ${ownStyle} 
        
        
        <footer class="footer is-nav-black">
            <div class="content has-text-centered">
                <p>
                สามารถใช้งานได้บนบราวเซอร์ Google Chrome 30 <br>
                    Copyright(c)2018 กระทรวงพาณิชย์ กรมการค้าต่างประเทศ <br>
                </p>
            </div>
        </footer>
            `;
  }
}
customElements.define("footer-one", footerOne);
