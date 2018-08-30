import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
class Page404 extends LitElement {
  render() {
    return html`
         ${bulmaStyles(this)}
           404 <br>
            ขอโทษ <br>
            เราหาหน้าเว็บที่ท่านต้องการไม่เจอ
        
        `;
  }
}

customElements.define("page-404", Page404);
