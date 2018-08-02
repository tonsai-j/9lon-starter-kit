import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
class Page404 extends LitElement {
  _render() {
    return html`
         ${bulmaStyles()}
           404 <br>
            ขอโทษ <br>
            เราหาหน้าเว็บที่ท่านต้องการไม่เจอ
        
        `;
  }
}

customElements.define("page-404", Page404);
