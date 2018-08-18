import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";

class MyInputDatalist extends LitElement {
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
      multiple: "",
      items: Array,
      classActive: String,
      selected: String
    };
  }
  constructor() {
    super();
    this._changeValue = this._changeValue.bind(this);
    this._popUp = this._popUp.bind(this);
    this._dropdown = this._dropdown.bind(this);
    // this._setValue = this._setValue.bind(this);
    this._filterItems = this._filterItems.bind(this);
    this.items = [];
    this.classActive = "";
    this.value = "";
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
    multiple,
    items,
    classActive,
    selected
  }) {
    return html`
    ${bulmaStyles()}
    <!-- is-active -->
   
    <div class$="dropdown ${classActive}">
    <div class="dropdown-trigger">
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
        
        tabindex$="${tabIndex}"
        autosave$="${autosave}"
        results$="${results}"
        accept$="${accept}"
        multiple$="${multiple}"
        on-focus="${this._popUp}"
        oninput="${this._filterItems}"
        aria-haspopup="true" aria-controls="dropdown-menu"
        >
        <!-- <span class="icon is-small">
        <i class="fas fa-angle-down">0</i>
      </span> -->
  </input>
  </div>
        
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    ${items.map(({ value, name, itemActive }) => {
                      if (itemActive || itemActive === undefined) {
                        return html`
                        <a value$="${value}" class="dropdown-item" on-click="${
                          this._changeValue
                        }">
                            ${name}
                        </a>
                        `;
                      }
                    })}
                </div>
            </div>
  </div>
    `;
  }
  //   on-focusout="${this._dropdown}"
  _popUp(e) {
    this.classActive = "is-active";
  }
  _dropdown(e) {
    this.classActive = "";
  }
  //   _setValue(e) {
  //     let value = e.currentTarget.getAttribute("value");
  //     this._dropdown();
  //     this.value = value;
  //   }
  _filterItems(e) {
    let value = e.currentTarget.value;
    // console.log(value);
    // console.log(this.items);
    // if (value !== "") {
    this.items.forEach(item => {
      if (
        item.name.search(value) != -1 ||
        value === "" ||
        value === undefined
      ) {
        item = Object.assign(item, { itemActive: true });
      } else {
        item = Object.assign(item, { itemActive: false });
      }
    });
    //   console.log(this.items);
    this.items = this.items.slice(0);
    // }
  }
  _changeValue(e) {
    let value = e.currentTarget.value || e.currentTarget.getAttribute("value");
    // หาอาเรย์ที่ตรงที่เลือก

    let itemSeleted = JSON.parse(
      JSON.stringify(this.items.find(item => item.value === value))
    );
    delete itemSeleted.itemActive;
    // console.log(itemSeleted);

    this._dropdown();
    this.value = itemSeleted.name;
    // console.log(value);

    // console.log(value);
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        bubbles: true,
        composed: true,
        detail: { value: value }
      })
    );
    this.dispatchEvent(
      new CustomEvent("value-changed-object", {
        bubbles: true,
        composed: true,
        detail: { value: itemSeleted }
      })
    );
  }

  _didRender(props, changedProps, prevProps) {
    //   console.log(props, changedProps, prevProps);
    if ("selected" in changedProps) {
      const value = this.selected;
      let itemSeleted = this.items.find(item => item.value === value);
    //   console.log(itemSeleted.name);
    // ต้องแทนค่าแบบนี้แทนเนึองจากมีปัญหามรการแทนค่าลงตรงๆ
      let element = this.shadowRoot.querySelector("input");
    //   console.log(element);
      element.value = itemSeleted.name;
      // this.value = itemSeleted.name;
    }
    return true;
  }
}

customElements.define("my-input-datalist", MyInputDatalist);
