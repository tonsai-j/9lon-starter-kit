import { html, LitElement } from "@polymer/lit-element";
import {
  Mixin,
  MyMixin,
  MyMixinTwo,
  MyMixinThree
} from "../../function/my-mixin";
import Composable from "../../function/ComposableMixin";
import bulmaStyles from "../../style/bulma-styles";
import "../../components/my-breadcrumb";
// import "../../components/my-tabs/my-tab";
import "../../components/my-tabs/my-tabs";
import "../../components/my-input/my-input";
import "../../components/my-input/my-textarea";
import "../../components/my-input/my-dropdown";
import "../../components/my-input/my-checkbox";
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
      remember: false
    };
    this.option = [
      {
        label: "กรุณาเลือกเพศ",
        value: ""
      },
      {
        label: "ชาย",
        value: "male"
      },
      {
        label: "หญิง",
        value: "female"
      }
    ];
    this.btn = false;
    this.brk = [
      {
        href: "/",
        name: "Home"
      },
      {
        href: "/renew",
        name: "Renew"
      },
      {
        href: "/index",
        name: "index"
      },
      {
        href: "/",
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
            <button on-click="${el => this.addValue(el)}">เพิ่ม</button>
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
                      name-value="contract last_name" 
                      on-value-changed="${this._setValueProps}" ></my-textarea>
            <my-dropdown id="tests" classnylon="is-primary" 
                      seleted="${contract.gender}"
                      name-value="contract gender"
                      seletevalue="${option}"
                      on-value-changed="${this._setValueProps}" >
              <!-- <option>กรุณาเลือกเพศ</option>
              <option>ชาย</option>
              <option>หญิง</option> -->
            </my-dropdown>   
            <my-checkbox classnylon="is-primary" 
                      checked="${contract.remember}"
                      disabled="${btn}"
                      name-value="contract remember" 
                      on-value-changed="${this._setValueProps}" >Remember me</my-checkbox>     
            
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
