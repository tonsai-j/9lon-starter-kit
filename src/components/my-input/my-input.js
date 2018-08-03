import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class MyInput extends LitElement {
  static get properties() {
    return {
      element: Object,
      disabled: Boolean
    };
  }
  constructor() {
    super();
    this._changeValue = this._changeValue.bind(this);
  }
  _render(props) {
    return html`
    ${bulmaStyles()}
    ${String(props.disabled)} < btn
    <input oninput="${this._changeValue}" disabled="${props.disabled}"/>
    <br>
    `;
  }
  _firstRendered() {
    //
    // console.log(this.properties);

    let element = this.shadowRoot.querySelector("input");
    this.element = element;
    this.reflection();
  }
  _changeValue(e) {
    let value = e.currentTarget.value;
    // console.log(value);
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        bubbles: true,
        composed: true,
        detail: { value: value }
      })
    );
  }
  _didRender(props, changedProps, prevProps) {
    //   _firstRendered() {
    // this.reflection();
    // console.log("เปลี่ยน");
  }
  reflection() {
    // console.log(1);
    let element = this.shadowRoot.querySelector("input");
    this.element = element;
    // อิลิเม้นใหญ่
    let attributes = this.attributes;
    // element.setAttribute('class','input')
    // console.log(element);
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        const { nodeName, nodeValue } = attributes[key];
        element.setAttribute([nodeName.replace("nylon", "")], nodeValue);
      }
    }
    
  }
}

customElements.define("my-input", MyInput);
