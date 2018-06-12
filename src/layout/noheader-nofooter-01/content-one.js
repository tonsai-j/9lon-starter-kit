import { LitElement, html } from "@polymer/lit-element";
import './header-one'
import './footer-one'

class contentOne extends LitElement {
    _render(){
        return html`
        <header-one></header-one>
        <slot name="content"></slot>
        <footer-one></footer-one>
        `
    }
}
customElements.define('content-one', contentOne)