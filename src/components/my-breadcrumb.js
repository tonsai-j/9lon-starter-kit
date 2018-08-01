import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../style/bulma-styles";
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

class MyBreadcrumb extends LitElement {
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
  _render({ value }) {
    return html`
     ${bulmaStyles()}
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                ${value.map(({ classname, href, name }) => {
                  return html`
                    <li class$=${classname}><a href$=${href}>${name}</a></li>
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
  _shouldRender(props, changedProps, prevProps) {
    // classname: "is-active",
    let lengthValue = this.value.length || 0;
    let newBr = [];
    let newObj = {};
    this.value.forEach((e, index) => {
      if (index === lengthValue - 1) {
        e = Object.assign(e, { classname: "is-active" });
      } else {
        e = Object.assign(e, { classname: "" });
      }

      //   newBr.push(newObj);
      // delete e
      // return e
    });
    // console.log('newBr',newBr);

    return true;
  }
}

customElements.define("my-breadcrumb", MyBreadcrumb);
