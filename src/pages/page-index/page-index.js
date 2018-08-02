import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
import "../../components/my-breadcrumb";
import '../../components/my-tabs/my-tab'
import '../../components/my-tabs/my-tabs'
class PageIndex extends LitElement {
  static get properties() {
    return {
      brk: Array
    };
  }
  constructor() {
    super();
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
  }
  _render({ brk }) {
    return html`
         ${bulmaStyles()}
            page-index
            ลองเพิ่มหน้าเองแล้ว
            <button on-click="${el => this.addValue(el)}">เพิ่ม</button>
            <my-breadcrumb value=${brk}></my-breadcrumb>
            <my-tabs selected="1">
                
            </my-tabs>
        `;
  }
  addValue(el) {
    this.brk.push({
      href: "/",
      name: "คนเดียว"
    });
    this.brk = this.brk.slice(0)
    // console.log(this.brk);
  }
}

customElements.define("page-index", PageIndex);
