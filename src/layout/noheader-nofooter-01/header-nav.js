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
            line-height: 1;
          }
          .menu-nav{
            color:#ffffff;
            padding:0px 15px;
          }
          .menu-nav:hover{
            background-color: #47C3ED;
            color:black;
          }
          </style>
            <div class="is-nav-black " >
                <div class="container is-con-menu own-flex-stretch ">
                <!-- <menu> -->
                    <a class="menu-nav own-flex-middle "> หน้าแรก</a> 
                    <a class="menu-nav own-flex-middle"> ข่าวประกาศ</a>
                    <a class="menu-nav own-flex-middle"> คำถามที่พบบ่อย</a>
                    <a class="menu-nav own-flex-middle"> ติดต่อหน่วยงาน</a>   
                <!-- </menu> -->
                </div>
            </div>
            `;
  }
}
customElements.define("header-nav", headerNav);
