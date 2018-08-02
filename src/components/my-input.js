import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../style/bulma-styles";

class MyInput extends LitElement {
  static get properties() {
    return {
      disabled: Boolean
    };
  }

  _render(props) {
    return html`
    ${bulmaStyles()}
    <input id="insertProp">
    `;
  }
  _didRender(props, changedProps, prevProps) {
    //   _firstRendered() {
    this.reflection();
    console.log('เปลี่ยน');
    
  }
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
