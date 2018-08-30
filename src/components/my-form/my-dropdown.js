import {
  LitElement,
  html
} from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class Dropdown extends LitElement {
  static get properties() {
    return {
      classnylon: String,
      element: String,
      seleted: "",
      id: "",
      ariaLabelledBy: String,
      ariaDescribedBy: String,
      disablednylon: Boolean,
      name: String,
      placeholder: String,
      readonly: Boolean,
      required: Boolean,
      seletevalue: Array
    };
  }
  constructor() {
    super();
    this.seletevalue = []
    this._changeValue = this._changeValue.bind(this);
  }
  render() {
    return html `
    ${bulmaStyles(this)}
    <div class="select ${this.classnylon}"
        id="${this.id}"
        
        >
        <select value="${this.seleted}" 
        .disabled="${this.disablednylon}" 
        aria-labelledby="${this.ariaLabelledBy}"
        aria-describedby="${this.ariaDescribedBy}"
        placeholder="${this.placeholder}"
        name="${this.name}"
        .readonly="${this.readonly}"
        required="${this.required}"
        @input="${this._changeValue}">
            
</select> 
</div>

  `;
  }
//   <!-- ${seletevalue.map(({ label, value }) => {
//     return html` < option value = "${value}" > $ {
// label
// } < /option>`;
// })
// }-- >
  firstRendered(){
    const elements = this.shadowRoot.querySelector("select")
    // console.log(element);
    this.element = elements;
    const children = this.children;
    let option = "";
    let text = "";
    // console.log(children);
    for (const key in children) {
      if (children.hasOwnProperty(key)) {
        const element = children[key];
        let attributes = element.attributes;
        option = document.createElement("option");
        text = document.createTextNode(element.innerText);
        // console.log(element);
        // ใส่ attribute เข้าไป
        if (attributes) {
          if (attributes.length > 0) {
            for (const key in attributes) {
              if (attributes.hasOwnProperty(key)) {
                const { nodeName, nodeValue } = attributes[key];
                option.setAttribute([nodeName.replace("nylon", "")], nodeValue)
              }
            }
          }
       
        option.appendChild(text);
        // console.log(option);
        
        elements.appendChild(option);
        // console.log(element);
      }
      }
    }
    
  }
  _changeValue(e) {
    // const element = this.shadowRoot.querySelector("select")
    // const children = element.children;
    // console.log(element);
    let value = this.shadowRoot.querySelector("select").value;
    // switch (this.type) {
    //   case "Number":
    //     value = Number(value);
    //     break;
    //   default:
    //     value = value;
    //     break;
    // }
    // console.log(value)
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        bubbles: true,
        composed: true,
        detail: { value: value }
      })
    );
  }
}

customElements.define("my-dropdown", Dropdown);