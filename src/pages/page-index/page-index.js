import { html, LitElement } from "@polymer/lit-element";
import {
  Mixin,
  MyMixin,
  MyMixinTwo,
  MyMixinThree
} from "../../function/my-mixin";
import Composable from "../../function/ComposableMixin";
import bulmaStyles from "../../style/bulma-styles";
import "../../components/my-quill/my-quill";

import "../../components/my-breadcrumb";
// import "../../components/my-tabs/my-tab";
import "../../components/my-tabs/my-tabs";
import "../../components/my-input/my-input";
import "../../components/my-input/my-textarea";
import "../../components/my-input/my-dropdown";
import "../../components/my-input/my-checkbox";
import "../../components/my-input/my-radio-group";
import "../../components/elements/my-button";
import "../../components/my-input/my-input-datalist";
// class PageIndex extends Mixin(LitElement).with(MyMixin,MyMixinTwo,MyMixinThree) {
class PageIndex extends Composable(LitElement).compose(
  MyMixin,
  MyMixinTwo,
  MyMixinThree
) {
  // class PageIndex extends LitElement {
  static get properties() {
    return {
      brk: Array,
      seletedTab: Number,
      contract: Object,
      btn: Boolean,
      option: Array
    };
  }
  constructor() {
    super();
    this.seletedTab = 1;
    this.contract = {
      first_name: "ตั้งต้น",
      last_name: "ไม่มี",
      age: 0,
      gender: "",
      remember: false,
      radio: "3",
      dropdown: "/index"
    };
    this.btn = false;
    this.brk = [
      {
        href: "/",
        value: "/",
        name: "Home"
      },
      {
        href: "/renew",
        value: "/renew",
        name: "Renew"
      },
      {
        href: "/index",
        value: "/index",
        name: "index"
      },
      {
        href: "/one",
        value: "/one",
        name: "คนเดียว"
      }
    ];
    // this.addEventListener("change-selected", e => {
    //   console.log(e);

    // });
    this._setValueProps = this._setValueProps.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  _render({ brk, seletedTab, contract, btn, option }) {
    return html`
         ${bulmaStyles()}
            page-index
            ลองเพิ่มหน้าเองแล้ว 
            ข้างล่าง
           
            <my-quill id="quill" value="" on-value-changed="${el =>
              this.resiveContent(el)}"></my-quill>
            <button on-click="${el => this.addValue(el)}">เพิ่ม</button>
            <my-button classnylon=" is-primary" on-click="${el =>
              this.getContent(el)}"> เพิ่ม ปุ่ม</my-button>
            <my-breadcrumb value=${brk}></my-breadcrumb>
            <br>
            ${seletedTab} <-ค่า
            <hr>
            <my-tabs selected$="${seletedTab}" 
                      name-value="seletedTab" 
                      on-tab-selected="${this._setValueProps}" >
              <my-tab>ข้อมูลส่วนตัว</my-tab>
              <my-tab>อัพโหลดเอกสาร</my-tab>   
              <my-tab style="color:red">รายงาน</my-tab>       
            </my-tabs>
            <button on-click="${this.toggle}">เปลี่ยนค่า</button>
            ${contract.first_name} <- first_name
            ${contract.last_name} <- last_name
            <my-input classnylon="is-primary" 
                      value$="${contract.age}"
                      type="Number" 
                      placeholder="Text input"
                      name-value="contract age" 
                      disabled="${btn}"
                      on-value-changed="${this._setValueProps}" ></my-input>
            <my-input id="tests" classnylon="is-primary" 
                      value$="${contract.first_name}"
                      type="text" 
                      placeholder="Text input"
                      name-value="contract first_name" 
                      disabled="${btn}"
                      on-value-changed="${this._setValueProps}" ></my-input>
            <my-textarea id="tests" classnylon="is-primary" 
                      value$="${contract.last_name}"
                      type="text" 
                      placeholder="Text input"
                      disabled="${btn}"
                      name-value="contract last_name" 
                      on-value-changed="${this._setValueProps}" ></my-textarea>
            <my-dropdown id="tests" classnylon="is-primary" 
                      seleted="${contract.gender}"
                      name-value="contract gender"
                      seletevalue="${option}"
                      disabled="${btn}"
                      on-value-changed="${this._setValueProps}" >
              <option value="">กรุณาเลือกเพศ</option>
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
            </my-dropdown>  
            <my-checkbox classnylon="is-primary" 
                      checked="${contract.remember}"
                      disabled="${btn}"
                      name-value="contract remember" 
                      on-value-changed="${
                        this._setValueProps
                      }" >Remember me</my-checkbox>    
            <my-radio-group
                      checked="${contract.radio}"
                      disabled="${btn}"
                      name="gender"
                      name-value="contract radio" 
                      on-value-changed="${this._setValueProps}" >
                <my-radio value="1"> 1 </my-radio>
                <my-radio value="2"> 2 </my-radio>
                <my-radio value="3"> 3 </my-radio>
            </my-radio-group>             
            <my-input-datalist classnylon="is-primary" 
            items="${brk}" 
            selected="${contract.dropdown}"></my-input-datalist>          

                      
            
        `;
  }
  addValue(el) {
    this.brk.push({
      href: "/",
      name: "คนเดียว"
    });
    this.brk = this.brk.slice(0);
    // console.log(this.brk);
  }
  resiveContent(e) {
    console.log(e.detail);
  }
  getContent() {
    let quill = this.shadowRoot.querySelector("#quill");
    console.log(quill);
  }
  toggle() {
    this.btn = !this.btn;
    // console.log(this.btn)
    let input = this.shadowRoot.querySelector("#tests");
    // input.reflection()
  }
  async _setValueProps(e) {
    let value = e.detail.value;
    // เช่น name-value="contract first_name"
    let valueName = e.currentTarget.getAttribute("name-value");
    let valueNameArray = valueName.split(" ");
    // สติงเริ่มต้น
    let strTOEval = `this`;
    // วนเพิ่มสติง
    valueNameArray.forEach(
      (element, index) => (strTOEval += `[valueNameArray[${index}]]`)
    );
    strTOEval += ` = value`;
    // แปลงสติงเป็นคำสั่ง javascript
    eval(strTOEval);
    await this.requestRender();
    // this._test();
  }
  _shouldRender(props, changedProps, prevProps) {
    console.log(props, changedProps, prevProps);

    return true;
  }
}

customElements.define("page-index", PageIndex);
