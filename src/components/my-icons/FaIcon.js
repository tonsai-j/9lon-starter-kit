import { LitElement, html,property } from '@polymer/lit-element';
import { FaStyles } from './fontawesome-all.css.js';

export class FaIcon extends LitElement {
  static get properties() {
    return {
      iclass: String
    }
  }
  constructor() {
    super();
    this.iclass="";
    const fontEl = document.createElement('link');
    fontEl.rel = 'stylesheet';
    fontEl.href = 'https://use.fontawesome.com/releases/v5.0.13/css/all.css';
    document.head.appendChild(fontEl);
  }
  render() {
    return html`
        ${FaStyles}<i class="${this.iclass}"></i>
        `;
  }
}
customElements.define('fa-icon', FaIcon);