import { LitElement, html } from "@polymer/lit-element";
import './header-one'
import './footer-one'
import bulmaStyles from '../../style/bulma-styles'
class contentOne extends LitElement {
    _render(){
        return html`
        ${bulmaStyles()}
        <header-one></header-one>
        <slot name="content"></slot>
        <footer-one></footer-one>
        `
    }
}
customElements.define('content-one', contentOne)