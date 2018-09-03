import { LitElement, html, property } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
// import fontawesomeStyle from "../../style/fontawesome-style";
class MyInputDatalist extends LitElement {
  static get properties() {
    return {
      // element: Object,
      // disabled: Boolean
      classnylon: { type: String },
      id: { type: String },
      ariaLabelledBy: { type: String },
      ariaDescribedBy: { type: String },
      disablednylon: Boolean,
      title: { type: String },
      value: { type: String },
      invalid: { type: String },
      preventInvalidInput: { type: String },
      allowedPattern: { type: String },
      validator: { type: String },
      type: { type: String },
      pattern: { type: String },
      required: { type: Boolean },
      autocomplete: { type: String },
      autofocus: { type: String },
      inputmode: { type: String },
      minlength: { type: Number },
      maxlength: { type: Number },
      min: Number,
      max: Number,
      step: Number,
      name: { type: String },
      placeholder: { type: String },
      readonly: { type: Boolean },
      list: { type: String },
      size: { type: String },
      autocapitalize: { type: String },
      autocorrect: { type: String },
      tabIndex: { type: String },
      autosave: { type: String },
      results: { type: String },
      accept: { type: String },
      multiple: { type: String },
      items: { type: Array },
      classActive: { type: Boolean },
      selected: { type: String },
      element: { type: Object },
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
    this.classActive = false;
    this.value = "";
    this.selected = "";
    this.element = {};
    // this.addEventListener("click", async e => {
    //   this.whales++;
    //   this._popUp(0);
    //   await this.updateComplete;

    //   // this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
    //   // console.log(this.shadowRoot.querySelector('.count').textContent);
    //   console.log("this.whales", this.whales);
    // });
  }
  
  // <!-- ${fontawesomeStyle(this)} -->
  render() {
    return html`
    ${bulmaStyles(this)}
    <!-- is-active -->
    <div class="dropdown ${this.classActive ? "is-active" : ""}">
    <div class="dropdown-trigger control has-icons-right">
    <input 
        class="input ${this.classnylon}"
        id="${this.id}"
        aria-labelledby="${this.ariaLabelledBy}"
        aria-describedby="${this.ariaDescribedBy}"
        ?disabled="${this.disablednylon}"
        title="${this.title}"
        value="${this.value}"
        invalid="${this.invalid}"
        prevent-invalid-input="${this.preventInvalidInput}"
        allowed-pattern="${this.allowedPattern}"
        validator="${this.validator}"
        type="${this.type}"
        pattern="${this.pattern}"
        required="${this.required}"
        autocomplete="${this.autocomplete}"
        .autofocus="${this.autofocus}"
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
        
        tabindex="${this.tabIndex}"
        autosave="${this.autosave}"
        results="${this.results}"
        accept="${this.accept}"
        multiple="${this.multiple}"
        @click="${this._popUp}"
        @input="${this._filterItems}"
        aria-haspopup="true" aria-controls="dropdown-menu"
        >
        <span class="icon is-small is-right is-small">
        <i class="fas fa-angle-down"></i>
      </span>
  </div>
        
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    ${this.items.map(({ value, name, itemActive }) => {
                      if (itemActive || itemActive === undefined) {
                        return html`
                        <a value="${value}" class="dropdown-item" @click="${
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
  // firstRendered() {
  //   // this._inner = this.shadowRoot.querySelector('x-inner');
  //   // console.log("firstRendered");
  //   this.element = this.shadowRoot.querySelector("input");
  //   // console.log(this.shadowRoot.querySelector("input"));
  // }
  //   on-focusout="${this._dropdown}"
  async _popUp(e) {
    this.classActive = true;
    // await this.updateComplete;
    // console.log(this.classActive);
  }
  async _dropdown(e) {
    this.classActive = false;
    // await this.updateComplete;
    // console.log(this.classActive);
  }
  //   _setValue(e) {
  //     let value = e.currentTarget.getAttribute("value");
  //     this._dropdown();
  //     this.value = value;
  //   }
  async _filterItems(e) {
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

    this.items = this.items.slice(0);
    // await this.updateComplete;
    // }
  }
  async _changeValue(e) {
    let value = e.currentTarget.value || e.currentTarget.getAttribute("value");
    // หาอาเรย์ที่ตรงที่เลือก

    let itemSeleted = JSON.parse(
      JSON.stringify(this.items.find(item => item.value === value))
    );
    delete itemSeleted.itemActive;
    // console.log('itemSeleted',itemSeleted);
    
    this._dropdown();
    let control = this.shadowRoot.querySelector("input");
    // console.log(control.value);
    control.value = itemSeleted.name;
    this.value = itemSeleted.name;
    this.selected = itemSeleted.value
    // console.log(value);
    // await this.updateComplete;
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
  update(changedProps) {
    super.update(changedProps);
    // console.log('this',this)
    // console.log('selected',this.selected)
    // console.log("updated!", changedProps);
      const value = this.selected;
    let itemSeleted = this.items.find(item => item.value === value);
    // console.log('itemSeleted',itemSeleted)
    this.value = itemSeleted.name;
    this.selected = itemSeleted.value
    // console.log(this.shadowRoot.querySelector("input"));
  }
  // shouldUpdate(changedProperties) {
  //   console.log("shouldUpdate", changedProperties);
  //   console.log(this.shadowRoot.querySelector("input"));
  //   return true;
  // }
  // shouldInvalidate(value, oldValue) {
  //   console.log("shouldInvalidate", value, oldValue);
  //   return true;
  // }
  // createRenderRoot(){
  //   console.log('createRenderRoot');

  // }
  // update(){
  //   super.update()
  //   console.log(1234)
  //   const value = this.selected;
  //   let itemSeleted = this.items.find(item => item.value === value);
  //   this.value = itemSeleted.name;
  //   // this.selected = itemSeleted.value
  // // ต้องแทนค่าแบบนี้แทนเนึองจากมีปัญหามรการแทนค่าลงตรงๆ
  //   let element = this.shadowRoot.querySelector("input")
  //   element.value = itemSeleted.name;

  // }
  // createRenderRoot(e) {
  //   console.log("createRenderRoot", e);
  // }
  // invalidateProperty(name, oldValue) {
  //   // console.log("this.selected", this.selected);
  //   // if (this.selected) {
  //   //   const value = this.selected;
  //   //   let itemSeleted = this.items.find(item => item.value === value);
  //   //   //   console.log(itemSeleted.name);
  //   //   // ต้องแทนค่าแบบนี้แทนเนึองจากมีปัญหามรการแทนค่าลงตรงๆ
  //   //   let element = this.shadowRoot.querySelector("input");
  //   //     console.log(element);
  //   //   element.value = itemSeleted.name;
  //   //   this.value = itemSeleted.name;
  //   // }
  //   // console.log("invalidateProperty", name, oldValue);
  //   if (this.selected !== "") {
  //     switch (name) {
  //       case "selected":
  //         console.log("this.selected", this.selected);
  //         let element = this.shadowRoot.querySelector("input");
  //         console.log("element", element);

  //         break;

  //       default:
  //         break;
  //     }
  //   }
  // }
  // get updateComplete() {
  //   return (async () => {
  //     return (await super.updateComplete) && (await this._inner.updateComplete);
  //   })();
  // }
  // _didRender(props, changedProps, prevProps) {
  //     console.log(props, changedProps, prevProps);
  //   if ("selected" in changedProps) {
  //     const value = this.selected;
  //     let itemSeleted = this.items.find(item => item.value === value);
  //   //   console.log(itemSeleted.name);
  //   // ต้องแทนค่าแบบนี้แทนเนึองจากมีปัญหามรการแทนค่าลงตรงๆ
  //     let element = this.shadowRoot.querySelector("input");
  //   //   console.log(element);
  //     element.value = itemSeleted.name;
  //     // this.value = itemSeleted.name;
  //   }
  //   return true;
  // }
}

customElements.define("my-input-datalist", MyInputDatalist);
