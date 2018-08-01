import { LitElement, html } from "@polymer/lit-element";

import BulmaStyle from "../../style/bulma-styles";
import ownStyle from "../../style/own-style";
class headerOne extends LitElement {
  _render() {
    return html`
     ${ownStyle} 
        <style>
          .is-nav-black {
            background-color: black;
            
            /* height:100%; */
          }
          .is-con-menu{
            height:45px;
            display: -webkit-flex; /* Safari */
            display: flex;
            -webkit-align-items: stretch; /* Safari 7.0+ */
            align-items: stretch;
            line-height: 1;
          }
          .menu-nav{
            display: flex;
            /* justify-content: center; */
            align-items: center;
            color:#ffffff;
            padding:0px 15px;
            
          }
          .menu-nav:hover{
            background-color: #47C3ED;
            color:black;
          }
          </style>
         ${BulmaStyle()}
            <nav
          class="navbar is-light"
          role="navigation"
          aria-label="main navigation"
          style="height:80px;"
        >
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="#">
                <img
                  src="./../../../images/logo/logo.png"
                  alt="DFT"
                  width="66"
                  height="53"
                />
              </a>
            </div>
            <div class="navbar-menu">
              <div class="navbar-end">
                <a
                  exact
                  to="/"
                  activeclass="is-active"
                  class="navbar-item"
                >
                <a class="navbar-item" href="#" target="_blank">
                  Star on <i class="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <nav class="is-nav-black" >
          <div class="container is-con-menu">
           <!-- <menu> -->
            <a class="menu-nav "> หน้าแรก</a> 
            <a class="menu-nav"> ข้าวประกาศ</a>
            <a class="menu-nav"> คำถามที่พบบ่อย</a>
            <a class="menu-nav"> ติดต่อหน่วยงาน</a>   
           <!-- </menu> -->
          </div>
        </nav>
            `;
  }
}
customElements.define("header-one", headerOne);
