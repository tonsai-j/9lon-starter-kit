import { LitElement, html } from "@polymer/lit-element";

import BulmaStyle from "../../style/bulma-styles";
import ownStyle from "../../style/own-style";
class headerOne extends LitElement {
  _render() {
    return html`
     ${ownStyle} 
        
         ${BulmaStyle()}
            <nav
          class="navbar is-light"
          role="navigation"
          aria-label="main navigation"
          style="height:80px;"
        >
          <div class="container">
            <div class="navbar-brand ">
              <a class="navbar-item" href="#">
                <img
                  src="./../../../images/logo/logo.png"
                  alt="DFT"
                  width="66"
                  height="53"
                />
              </a>
              <div class="own-flex-middle">
                 ระบบทะเบียนผู้ส่งออก <br>
                กองบริหารการค้าข้าว | กรมการค้าต่างประเทศ
              </div>
            </div>
            <div class="navbar-menu">
              <div class="navbar-end">
                <div class="own-flex-middle">
                  เข้าสู่ระบบ
                </div>
              </div>
            </div>
          </div>
        </nav>
        
            `;
  }
}
customElements.define("header-one", headerOne);
