import { html, LitElement } from "@polymer/lit-element";
import { directive } from "lit-html";
import {
  Mixin,
  MyMixin,
  MyMixinTwo,
  MyMixinThree
} from "../../function/my-mixin";
import Composable from "../../function/ComposableMixin";
import bulmaStyles from "../../style/bulma-styles";
import fontawesomeStyle from "../../style/fontawesome-style";
// import "../../components/my-icons/FaIcon"
// import combindForm from "../../function/combindForm";
import "../../components/my-quill/my-quill";
import "../../components/my-quill/my-quill-render";
// import "@polymer/iron-icon";
import "../../components/my-icons/my-icons";

import "../../components/my-breadcrumb";
import "../../components/my-tabs/my-tabs";
import "../../components/my-form/my-input";
import "../../components/my-form/my-textarea";
import "../../components/my-form/my-dropdown";
import "../../components/my-form/my-checkbox";
import "../../components/my-form/my-radio-group";
import "../../components/elements/my-button";
import "../../components/my-form/my-input-datalist";
// const safe = f =>
//   directive(part => {
//     console.log("part", part);

//     try {
//       console.log(f);
//     } catch (e) {
//       console.error(e);
//     }
//   });
// let data;
// data = {
//   foo: 1
// };
// const testForm = ({ c, handleChange }) => html`
// ${console.log(c)}
//  <form >
//   First name:<br>
//   <input type="text" name="firstname" value="Mickey" oninput="${handleChange}">
//   <br>
//   Last name:<br>
//   <input type="text" name="lastname" value="Mouse" oninput="${handleChange}">
//   <br><br>
//   Sai name:<br>
//   <input type="text" name="sainame" value="saiYp" oninput="${handleChange}">
//   <br><br>
//   <input type="submit" value="Submit">
// </form>
// `;
// ${combindForm({
//   form: "contact",
//   prop: contract
// })(testForm)}
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
      content: "",
      first_name: "ตั้งต้น",
      last_name: "ไม่มี",
      age: 0,
      gender: "male",
      remember: true,
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
  // foo = ${safe(_=>data.foo)}
  // <!-- <div>${directive((part) => { console.log(part)})}</div>888
  // <div>${directive((part) => { part.setValue('Hello')})}</div> -->
  // <!-- ${directive((part) => part.setValue((part._previousValue + 1) || 0))} -->
  render() {
    return html`
         ${bulmaStyles(this)}
                    ss
          <my-quill-render .data="${
            this.contract.content
          }" .data-type="delta"></my-quill-render>
            <my-quill id="quill" value="" name-value="contract content" 
            @value-changed="${this._setValueProps}"></my-quill>
            <button @click="${el => this.addValue(el)}">เพิ่ม</button>
            <my-button classnylon=" is-primary" on-click="${el =>
              this.getContent(el)}" .disablednylon="${
      this.btn
    }"> เพิ่ม ปุ่ม</my-button>
            <my-breadcrumb></my-breadcrumb>
            <br>
            ${this.seletedTab} <-ค่า
            <hr>
            <my-tabs .selected="${this.seletedTab}" 
                      name-value="seletedTab" 
                      @tab-selected="${this._setValueProps}" >
              <my-tab>ข้อมูลส่วนตัว</my-tab>
              <my-tab>อัพโหลดเอกสาร</my-tab>   
              <my-tab style="color:red">รายงาน</my-tab>       
            </my-tabs>
            <button @click="${this.toggle}">เปลี่ยนค่า</button>
            ${this.contract.first_name} <- first_name
            ${this.contract.last_name} <- last_name
            <my-input classnylon="is-primary" 
                      value="${this.contract.age}"
                      type="Number" 
                      placeholder="Text input"
                      name-value="contract age" 
                      .disablednylon="${this.btn}"
                      @value-changed="${this._setValueProps}" 
                      icons="has-icons-left has-icons-right"
                      iconsLeft="my-icons:polymer"
                      iconsRight="my-icons:android">
                      </my-input>
            <my-input id="tests" classnylon="is-primary" 
                      value="${this.contract.first_name}"
                      type="text" 
                      placeholder="Text input"
                      name-value="contract first_name" 
                      .disablednylon="${this.btn}"
                      @value-changed="${this._setValueProps}" 
                      icons="has-icons-left has-icons-right"
                      iconsLeft="my-icons:polymer"
                      iconsRight="my-icons:android"></my-input>
            <my-textarea id="tests" classnylon="is-primary" 
                      value="${this.contract.last_name}"
                      type="text" 
                      placeholder="Text input"
                      .disablednylon="${this.btn}"
                      name-value="contract last_name" 
                      @value-changed="${this._setValueProps}" ></my-textarea>
            <my-dropdown id="tests" classnylon="is-primary" 
                      seleted="${this.contract.gender}"
                      name-value="contract gender"
                      seletevalue="${this.contract.gender}"
                      .disablednylon="${this.btn}"
                      @value-changed="${this._setValueProps}" >
              <option value="">กรุณาเลือกเพศ</option>
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
            </my-dropdown>  
            <my-checkbox classnylon="is-primary" 
                      checked="${this.contract.remember}"
                      .disablednylon="${this.btn}"
                      name="remember"
                      name-value="contract remember" 
                      @value-changed="${
                        this._setValueProps
                      }" >Remember me</my-checkbox>    
            <my-radio-group
                      .checked="${this.contract.radio}"
                      .disablednylon="${this.btn}"
                      .name="gender"
                      name-value="contract radio" 
                      @value-changed="${this._setValueProps}" >
                <my-radio value="1"> 1 </my-radio>
                <my-radio value="2"> 2 </my-radio>
                <my-radio value="3"> 3 </my-radio>
            </my-radio-group>             
            <my-input-datalist classnylon="is-primary" 
            .items="${this.brk}" 
            .disablednylon="${this.btn}"
            .selected="${this.contract.dropdown}"
            name-value="contract dropdown" 
            @value-changed="${
              this._setValueProps
            }" ></my-input-datalist>          
   
            
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
  async toggle() {
    this.btn = !this.btn;
    console.log(this.contract);
  }
  async _setValueProps(e) {
    try {
      let value = e.detail.value;
      // เช่น name-value="contract first_name"
      let valueName = e.currentTarget.getAttribute("name-value");
      let valueNameArray = valueName.split(" ");
      let valueNameArrayLength = valueNameArray.length
      // console.log('valueNameArrayLength',valueNameArrayLength)
      // สติงเริ่มต้น
      let strTOEval = `this.`;
      // วนเพิ่มสติง
      strTOEval += valueNameArray.join(".");
      // let objAss = strTOEval + ' Object.assign({},'+strTOEval+','+strTOEval+')'
      // valueNameArray.forEach(element => (strTOEval += `.${element}`));
      strTOEval += ` = value`;

      // แปลงสติงเป็นคำสั่ง javascript
      eval(strTOEval);
      // eval(objAss);
      // this.contract = JSON.parse(JSON.stringify(this.contract))
      // ต้องเป็น Object
      if(valueNameArrayLength > 1) {
        this[valueNameArray[0]] = Object.assign({}, this[valueNameArray[0]]);
      }
      // console.log('this[valueNameArray[0]]',this[valueNameArray[0]])
    } catch (error) {
      console.log(error);
    }
  }
  update(changedProps) {
    super.update(changedProps);
    console.log("updated! bbbb", changedProps);

    console.log("xxxxx");
  }
  shouldUpdate(changedProperties) {
    console.log("shouldUpdate", changedProperties);
    return true;
  }
  // _shouldRender(props, changedProps, prevProps) {
  //   console.log(props, changedProps, prevProps);

  //   return true;
  // }
}

customElements.define("page-index", PageIndex);
