import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../style/bulma-styles";
import { connect } from "pwa-helpers/connect-mixin.js";
// This element is connected to the Redux store.
import { store } from "../store/store";
/*
วิธีใช้ 
<my-breadcrumb value=${brk}></my-breadcrumb>
และสร้างฟั่งชั้น เพิ่งเพิ่ม value
this.brk.push({
    href: "/",
    name: "คนเดียว"
  });
  this.brk = this.brk.slice(0)
*/

class MyBreadcrumb extends connect(store)(LitElement) {
  static get properties() {
    return {
      value: Array
    };
  }
  constructor() {
    super();
    this.value = [];
    // is-active
  }
  render() {
    return html`
     ${bulmaStyles(this)}
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                ${this.value.map(({ href, title ,last}) => {
                  return html`
                    <li .class="${(last ? 'is-active' : '')}">
                        <a href="${href}" .aria-current="${(last ? 'page' : '')}">${title}</a>
                    </li>
                    `;
                })}
                <!-- <li><a href="/">Bulma</a></li>
                <li><a href="/renew">renew</a></li>
                <li><a href="/index">index</a></li>
                <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li> -->
            </ul>
        </nav>
        `;
  }
  _stateChanged(state) {
    // console.log("state my-breadcrumb", state.myBreadcrumbs.myBreadcrumbs);
    this.value = state.myBreadcrumbs.myBreadcrumbs
    this.value = this.value.slice(0)
    // this.count = state.data.count;
    // console.log('this.value',this.value);
    
  }
  _shouldRender(props, changedProps, prevProps) {
    let lengthValue = this.value.length || 0;
    this.value.forEach((e, index) => {
      // ต้องเป็นค่าสุดท้าย
      if (index === lengthValue - 1) {
        e = Object.assign(e, { classname: "is-active" ,last: true});
      } else {
        e = Object.assign(e, { classname: "",last: false });
      }
    });
    return true;
  }
}

customElements.define("my-breadcrumb", MyBreadcrumb);
