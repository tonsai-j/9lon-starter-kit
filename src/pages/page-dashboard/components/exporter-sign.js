import { LitElement, html } from "@polymer/lit-element";
// import { PageViewElement } from './../../../components/page-view-element';
import "@polymer/paper-material";
import "@polymer/iron-pages";
import "@polymer/paper-icon-button";
// //import "@polymer/iron-icons/iron-icons";
import bulmaStyles from "../../../style/bulma-styles";
import {
  FlexboxGridLit,
  FlexboxGridRemovePadding
} from "../../../style/flexbox-grid-lit";
import ownStyle from "../../../style/own-style";
class ExporterSign extends LitElement {
  static get properties() {
    return {
      name: Array
    };
  }
  constructor() {
    super();
  }
  _render({ name }) {
    return html`
         ${bulmaStyles()} 
         ${ownStyle} 
        <style>
        div.a {
            text-align: center;
        }

        div.b {
            text-align: left;
        }

        div.d {
            text-align: right;
        }
           
        </style>
        <!-- <paper-material elevation="1"> -->
        <!-- <div class="box">
                <div class="panel"> -->
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li class="is-active"><a href="#" >ข้อมูล</a></li>
                        </ul>
                    </nav>
                  
                <div class="columns">
                    <div class="column  is-3 ">
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            เลขประจำตัวผู้ส่งออก : 
                        </div>
                    </div>

                    <div class="column  is-4 "> 
                        <div class="own-text-middle " >
                            0105547022097
                        </div>
                    </div>

                    <div class="column  is-3 ">
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-3 ">
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                        ชื่อบริษัท : 
                        </div>
                    </div>

                    <div class="column  is-4 "> 
                        <div class="own-text-middle " >
                        บริษัท ไบโอ พาแน็ค ดีเวลลอปเมนท์ (ประเทศไทย) จำกัด
                        </div>
                    </div>

                    <div class="column  is-3 ">
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-3 ">
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                        ประเภท : 
                        </div>
                    </div>

                    <div class="column  is-4 "> 
                        <div class="own-text-middle " >
                        -
                        </div>
                    </div>

                    <div class="column  is-3 ">
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-3 ">
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                        สถานะ : 
                        </div>
                    </div>

                    <div class="column  is-4 "> 
                        <div class="own-text-middle " >
                        ยังไม่ได้ลงทะเบียน
                        </div>
                    </div>

                    <div class="column  is-3 ">
                    </div>
                </div>

                <!-- </div>
        </div> -->




               
        
        <!-- </paper-material> -->
        
        `;
  }

  //   _firstRendered() {
  //     var pages = this.shadowRoot.querySelector("iron-pages");

  //     console.log(pages);
  //     setInterval(function() {
  //       pages.selectNext();
  //     }, 3000);
  //     // pages.addEventListener('click', function (e) {

  //     //     pages.selectNext();
  //     // });
  //   }
}

customElements.define("exporter-sign", ExporterSign);
