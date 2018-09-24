import { html, LitElement } from "@polymer/lit-element";

class testPage extends LitElement {
  render() {
    return html`
           404 <br>
            ขอโทษ <br>
            เราหาหน้าเว็บที่ท่านต้องการไม่เจอ
        <slot></slot>
        `;
  }
}

customElements.define("test-page", testPage);
