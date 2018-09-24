import { html, LitElement } from "@polymer/lit-element";
import { FormMixin } from "../../function/form-function";
import { connect } from "pwa-helpers/connect-mixin.js";

// This element is connected to the Redux store.
import { store } from "../../store/store";

// These are the actions needed by this element.
import { formSaveRegister } from "../../actions/form-input-action";

// We are lazy loading its reducer.
import formInput from "../../reducers/form-input-reducer";
store.addReducers({
  formInput
});

import ownStyle from "../../style/own-style";
import {
  mahaniyomFont,
  CSChatThaiFont,
  notosansthaiFont,
  rsuFont
} from "../../style/fonts-style";

import to from "../../function/to";
// import "../../components/my-input";
import bulmaStyles from "../../style/bulma-styles";
// class pageForm extends connect(store)(Mixin(PageViewElement).with(FormMixin)) {
class pageForm extends connect(store)(FormMixin(LitElement)) {
  // class pageForm extends connect(store)(LitElement) {
  static get properties() {
    return {
      data: Object,
      data2: Object,
      number: Object,
      btn: Boolean
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
    this.number = {
      num: 0
    };
    this.btn = true;
    // this.value = "x"
  }
  render() {
    return html`
    ${bulmaStyles(this)}
    ${ownStyle} ${rsuFont}  ${mahaniyomFont} ${CSChatThaiFont} ${notosansthaiFont}
    ลอง
    <!-- <style>
      .testRsu{
        font-size: 1em;
				font-family: 'rsuregular', sans-serif;
				-webkit-font-smoothing: antialiased;
      }
      .testmahaniyom{
        font-size: 1em;
				font-family: 'mahaniyom', sans-serif;
				-webkit-font-smoothing: antialiased;
      }
      .testCSChatThai{
        font-size: 1em;
				font-family: 'CSChatThai', sans-serif;
				-webkit-font-smoothing: antialiased;
      }
      .testnotoSansThaiRegular{
        font-size: 1em;
				font-family: 'notoSansThaiRegular', sans-serif;
				-webkit-font-smoothing: antialiased;
      }
      </style>
      <div class="">
        ทดสอบ no style font 232
      </div>
      <div class="testRsu">
        ทดสอบ font
      </div>
      <div class="testmahaniyom">
        ทดสอบ font
      </div>
      <div class="testCSChatThai">
        ทดสอบ font
      </div>
      <div class="testnotoSansThaiRegular">
        ทดสอบ font
        own-style-flex own-flex-middle
      </div> -->
      <!-- <my-input testxxx="test" disabled$=${btn} classnylon="input is-primary" type="text" placeholder="Text input"></my-input> -->
      <button on-click="${e => this.changePopInsert(e)}"> ลองเปลี่ยนค่า</button>
      
      <br>
      <button on-click="${e => this._test(e)}"> เรียกค่า</button>
      จำนวนการคลิก ${this.number.num} <-
    <div class="">
         pageForm sdfsf ได้ ${data2.firstName} --
          <input id="lastName" name="firstName" 
            value="${data2.firstName}"
            on-input="${e => this._formOnInputObject(e)}" 
            on-focus="${e => this._formSetSeleteValue(e)}">

        "" > ${data.firstName} <----
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
            </div>

            <button on-click="${e => this.saveRedux(e)}"> บันทึก</button>
        `;
  }
  _didRender(props, changedProps, prevProps) {
    // console.log(props, changedProps, prevProps);
    // console.log("-----------------------------------");
  }
  changePopInsert() {
    let el = this.shadowRoot.querySelector("my-input");
    this.btn = !this.btn;
    console.log("this.btn ", this.btn);

    // el.setAttribute('disabled', false)
    // el.setAttribute('placeholder', 'ลองสิ')
    console.log(el);
    el.reflection();
  }
  saveRedux() {
    console.log("this.data   asds >", this.data);
    console.log("เข้า");
    store.dispatch(formSaveRegister(this.data));
  }

  test(e) {
    // console.log(e);
    // console.log(this.data);
    // let nextParams = { x: 2 }
    // this._redirect('/page-exporter', nextParams)
  }

}

customElements.define("page-form", pageForm);
