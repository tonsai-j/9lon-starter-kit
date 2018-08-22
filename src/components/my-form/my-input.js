import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
// import "@polymer/iron-icon";
// import "../my-icons/my-icons";
class MyInput extends LitElement {
  static get properties() {
    return {
      // element: Object,
      // disabled: Boolean
      classnylon: String,
      id: "",
      ariaLabelledBy: String,
      ariaDescribedBy: String,
      disablednylon: Boolean,
      title: String,
      value: "",
      invalid: "",
      preventInvalidInput: "",
      allowedPattern: "",
      validator: "",
      type: "",
      pattern: "",
      required: "",
      autocomplete: "",
      autofocus: "",
      inputmode: "",
      minlength: "",
      maxlength: "",
      min: Number,
      max: Number,
      step: Number,
      name: String,
      placeholder: "",
      readonly: Boolean,
      list: "",
      size: "",
      autocapitalize: "",
      autocorrect: "",
      tabIndex: "",
      autosave: "",
      results: "",
      accept: "",
      multiple: ""
    };
  }
  constructor() {
    super();
    this._changeValue = this._changeValue.bind(this);
  }
  _render({
    classnylon,
    id,
    ariaLabelledBy,
    ariaDescribedBy,
    disablednylon,
    title,
    value,
    invalid,
    preventInvalidInput,
    allowedPattern,
    validator,
    type,
    pattern,
    required,
    autocomplete,
    autofocus,
    inputmode,
    minlength,
    maxlength,
    min,
    max,
    step,
    name,
    placeholder,
    readonly,
    list,
    size,
    autocapitalize,
    autocorrect,
    tabIndex,
    autosave,
    results,
    accept,
    multiple
  }) {
    return html`
    ${bulmaStyles(this)}
    <p class="control has-icons-left has-icons-right">
    <input 
        class$="input ${classnylon}"
        id$="${id}"
        aria-labelledby$="${ariaLabelledBy}"
        aria-describedby$="${ariaDescribedBy}"
        disabled="${disablednylon}"
        title$="${title}"
        value="${value}"
        invalid="${invalid}"
        prevent-invalid-input="${preventInvalidInput}"
        allowed-pattern="${allowedPattern}"
        validator="${validator}"
        type$="${type}"
        pattern$="${pattern}"
        required$="${required}"
        autocomplete$="${autocomplete}"
        autofocus$="${autofocus}"
        inputmode$="${inputmode}"
        minlength$="${minlength}"
        maxlength$="${maxlength}"
        min$="${min}"
        max$="${max}"
        step$="${step}"
        name$="${name}"
        placeholder$="${placeholder}"
        readonly$="${readonly}"
        list$="${list}"
        size$="${size}"
        autocapitalize$="${autocapitalize}"
        autocorrect$="${autocorrect}"
        oninput="${this._changeValue}"
        tabindex$="${tabIndex}"
        autosave$="${autosave}"
        results$="${results}"
        accept$="${accept}"
        multiple$="${multiple}">
        <span class="icon is-small is-left">
          <iron-icon icon="my-icons:polymer"></iron-icon> 
        </span>
        <span class="icon is-small is-right">
          <iron-icon icon="my-icons:android"></iron-icon> 
        </span>
  </p>
    `;
  }
  // _firstRendered() {
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
  //   //   _firstRendered() {
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
