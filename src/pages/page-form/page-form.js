import { html, LitElement } from "@polymer/lit-element";
import { PageViewElement } from "./../../components/page-view-element.js";
import {
  Mixin,
  MyMixin,
  MyMixinTwo,
  MyMixinThree
} from "./../../components/my-mixin.js";
import { FormMixin } from "./../../components/form-function.js";
// import { connect } from "pwa-helpers/connect-mixin.js";
import { connect } from "../../../node_modules/pwa-helpers/connect-mixin.js";
// import './shared-styles.js';
import { store } from "../../store/store";
class pageForm extends connect(store)(Mixin(PageViewElement).with(FormMixin)) {
//   class pageForm extends connect(store)(LitElement) {
  static get properties() {
    return {
      data: Object,
      data2: Object
    };
  }
  _stateChanged(state) {
    console.log("state", state);
    // this.count = state.data.count;
  }
  constructor() {
    super();
    this.data = {
      firstName: "ชื่อ",
      lastName: "นามสกุล"
    };
    this.data2 = {
      firstName: "ชื่อ"
    };
    // this.value = "x"
  }
  _render({ data, data2 }) {
    return html`
         pageForm sdfsf ได้ ${data2.firstName} --
          <input id="lastName" name="firstName" 
            value="${data2.firstName}"
            on-input="${e => this._formOnInputObject(e)}" 
            on-focus="${e => this._formSetSeleteValue(e)}">

        ${data.firstName}
        <input id="firstName" name="firstName" number
            value="${data.firstName}"
            on-input="${e => this._formOnInputObject(e)}" 
            on-focus="${e => this._formSetSeleteValue(e)}">
        ${data.lastName}
        <input id="lastName" name="lastName" 
            value="${data.lastName}"
            on-input="${e => this._formOnInputObject(e)}" 
            on-focus="${e => this._formSetSeleteValue(e)}">
         
            <button on-click="${e => this.test(e)}">ดึงค่า</button>
        `;
  }
  _didRender(props, changedProps, prevProps) {
    console.log(props, changedProps, prevProps);
    console.log("-----------------------------------");
  }
  test(e) {
    // console.log(e);
    console.log(this.data);

    // let nextParams = { x: 2 }
    // this._redirect('/page-exporter', nextParams)
  }

  _pageActive(params) {
    console.log("_pageActive=>", params);
  }
}

customElements.define("page-form", pageForm);
