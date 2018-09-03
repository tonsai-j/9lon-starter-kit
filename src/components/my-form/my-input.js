import { LitElement, html, property } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
// import "@polymer/iron-icon";
// import "../my-icons/my-icons";
class MyInput extends LitElement {
  static get properties() {
    return {
      // element: Object,
      // disabled: Boolean
      classnylon: String,
      id:{},
      ariaLabelledBy: String,
      ariaDescribedBy: String,
      disablednylon: Boolean,
      title: String,
      value:{},
      invalid:{},
      preventInvalidInput:{},
      allowedPattern:{},
      validator:{},
      type: { type: String },
      pattern:{},
      required:{},
      autocomplete:{},
      autofocus:{},
      inputmode:{},
      minlength:{},
      maxlength:{},
      min: Number,
      max: Number,
      step: Number,
      name: String,
      placeholder:{},
      readonly: Boolean,
      list:{},
      size:{},
      autocapitalize:{},
      autocorrect:{},
      tabIndex:{},
      autosave:{},
      results:{},
      accept:{},
      multiple:{},
      icons:{},
      iconsLeft:{},
      iconsRight:{},
    };
  }
  constructor() {
    super();
    this._changeValue = this._changeValue.bind(this);
    this.classnylon = "";
    this.id = "";
    this.ariaLabelledBy = "";
    this.ariaDescribedBy = "";
    this.disablednylon = "";
    this.title = "";
    this.value = "";
    this.invalid = "";
    this.preventInvalidInput = "";
    this.allowedPattern = "";
    this.validator = "";
    this.type = "String";
    this.pattern = "";
    this.required = false;
    this.autocomplete = "";
    this.autofocus = "";
    this.inputmode = "";
    this.minlength = "";
    this.maxlength = "";
    this.min = "";
    this.max = "";
    this.step = "";
    this.name = "";
    this.placeholder = "";
    this.readonly = false;
    this.list = "";
    this.size = "";
    this.autocapitalize = "";
    this.autocorrect = "";
    this.tabIndex = "";
    this.autosave = "";
    this.results = "";
    this.accept = "";
    this.multiple = "";
    this.icons = '';
    this.iconsLeft = '';
    this.iconsRight = '';
  }
  render() {
    return html`
    ${bulmaStyles(this)}
    <p class="control ${this.icons} ">
    <input 
        class="input ${this.classnylon}"
        id="${this.id}"
        aria-labelledby="${this.ariaLabelledBy}"
        aria-describedby="${this.ariaDescribedBy}"
        .disabled="${this.disablednylon}"
        title="${this.title}"
        .value="${this.value}"
        .invalid="${this.invalid}"
        .prevent-invalid-input="${this.preventInvalidInput}"
        .allowed-pattern="${this.allowedPattern}"
        .validator="${this.validator}"
        .type="${this.type}"
        pattern="${this.pattern}"
        required="${this.required}"
        autocomplete="${this.autocomplete}"
        autofocus="${this.autofocus}"
        inputmode="${this.inputmode}"
        minlength="${this.minlength}"
        maxlength="${this.maxlength}"
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        name="${this.name}"
        placeholder="${this.placeholder}"
        .readonly="${this.readonly}"
        list="${this.list}"
        size="${this.size}"
        autocapitalize="${this.autocapitalize}"
        autocorrect="${this.autocorrect}"
        @input="${this._changeValue}"
        tabindex="${this.tabIndex}"
        autosave="${this.autosave}"
        results="${this.results}"
        accept="${this.accept}"
        multiple="${this.multiple}">
        <span class="icon is-small is-left">
          <iron-icon icon="${this.iconsLeft}"></iron-icon> 
        </span>
        <span class="icon is-small is-right">
          <iron-icon icon="${this.iconsRight}"></iron-icon> 
        </span>
  </p>
    `;
  }
  // firstRendered() {
  //   //
  //   // console.log(this.properties);

  //   let element = this.shadowRoot.querySelector("input");
  //   this.element = element;
  //   this.reflection();
  // }
  _changeValue(e) {
    let value = e.currentTarget.value;

    switch (this.type) {
      case "Number":
        value = Number(value);
        break;
      default:
        value = value;
        break;
    }

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
  //   //   firstRendered() {
  //   // this.reflection();
  //   // console.log("เปลี่ยน");
  // }
  // reflection() {
  //   // console.log(1);
  //   let element = this.shadowRoot.querySelector("input");
  //   this.element = element;
  //   // อิลิเม้นใหญ่
  //   console.log(this);

  //   let attributes = this.attributes;
  //   // element.setAttribute('class','input')
  //   // console.log(element);
  //   for (const key in attributes) {
  //     if (attributes.hasOwnProperty(key)) {
  //       const { nodeName, nodeValue } = attributes[key];
  //       element.setAttribute([nodeName.replace("nylon", "")], nodeValue);
  //     }
  //   }

  // }
}

customElements.define("my-input", MyInput);
