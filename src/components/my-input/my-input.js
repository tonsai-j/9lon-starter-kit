import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class MyInput extends LitElement {
  static get properties() {
    return {
      element: Object
    };
  }
  constructor() {
    super();
    this._changeValue = this._changeValue.bind(this)
  }
  _render(props) {
    return html`
    ${bulmaStyles()}
    <input oninput="${this._changeValue}" >
    `;
  }
  _firstRendered() {
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
  _changeValue(e) {
    let value = e.currentTarget.value
    // console.log(value);
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        bubbles: true,
        composed: true,
        detail: { value: value }
      })
    );
  }
  // _didRender(props, changedProps, prevProps) {
  //   //   _firstRendered() {
  //   this.reflection();
  //   console.log('เปลี่ยน');

  // }
  reflection() {
    let el = this;
    let atts = el.attributes;
    let n = atts.length;
    let elSeleted = this.shadowRoot.querySelector("#insertProp");
    // let attsSeleted = elSeleted.attributes;
    // let nSeleted = attsSeleted.length;

    for (var i = 0; i < n; i++) {
      // ถ้า value ไม่เท่ากับ false
      if (atts[i].nodeValue !== "false") {
        elSeleted.setAttribute(
          [atts[i].nodeName.replace("nylon", "")],
          atts[i].nodeValue
        );
      } else {
        elSeleted.removeAttribute(atts[i].nodeName);
      }
    }
  }
}

customElements.define("my-input", MyInput);
