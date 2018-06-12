import { LitElement, html } from "@polymer/lit-element";

class footerTwo extends LitElement {
    _render(){
        return html`
        ท้ายเว็บ
            `
    }
}
customElements.define('footer-two', footerTwo)