import { LitElement, html } from "@polymer/lit-element";
import BulmaStyle from "../../style/bulma-styles";
import ownStyle from "../../style/own-style";
class headerNav extends LitElement {
  _render() {
    return html`
     ${ownStyle} 
        
        ${BulmaStyle()}
        <style>
          
          .is-con-menu{
            height:45px;
            display: -webkit-flex; /* Safari */
            display: flex;
            -webkit-align-items: stretch; /* Safari 7.0+ */
            align-items: stretch;
            line-height: 1;
          }
          .menu-nav{
            display: -webkit-flex; /* Safari */
            display: flex;
            align-items: center;
            color:#ffffff;
            padding:0px 15px;
          }
          .menu-nav:hover{
            background-color: #47C3ED;
            color:black;
          }
          </style>
            <div class="is-nav-black" >
                <div class="container is-con-menu">
                <!-- <menu> -->
                    <a class="menu-nav "> หน้าแรก</a> 
                    <a class="menu-nav"> ข้าวประกาศ</a>
                    <a class="menu-nav"> คำถามที่พบบ่อย</a>
                    <a class="menu-nav"> ติดต่อหน่วยงาน</a>   
                <!-- </menu> -->
                </div>
            </div>
            `;
  }
}
customElements.define("header-nav", headerNav);
