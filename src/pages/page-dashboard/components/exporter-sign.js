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
            input {
                width: 100%;
                box-sizing: border-box;
                font-size: 1.5em;
            }
        
            iron-pages {
                width: 100%;
                height: 600px;
                font-size: 3em;
                color: white;
                text-align: center;
            }
        
            iron-pages div {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 4px;
                box-sizing: border-box;
            }
        
        
        
            iron-pages div:nth-child(1) {
                background-image: url("https://money2know.com/wp-content/uploads/2018/01/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%AD%E0%B8%AD%E0%B8%8160.jpg");
            }
        
            iron-pages div:nth-child(2) {
                background-image: url("http://media.komchadluek.net/img/size1/2016/09/01/kb8ehabckkj67f9hac9db.jpg");
            }
        
            iron-pages div:nth-child(3) {
                background-image: url("http://www.thairiceforlife.com/images/certification/quality-hommali.jpg");
            }
        
            #pager {
                position: relative;
                margin: auto;
            }
        
            .prev,
            .next {
                position: absolute;
                top: 45%;
            }
        
            .next {
                right: 0;
                border-radius: 3px 0 0 3px;
            }
        
            .prev:hover,
            .next:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }
        </style>
        <!-- <paper-material elevation="1"> -->
        <br>
        <div class="box">
                <div class="panel">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li class="is-active"><a href="#" >ข้อมูล</a></li>
                        </ul>
                    </nav>
                   
                <div class="columns">
                    <div class="column  is-3 ">
                        
                    </div>
                    <div class="column  is-6 "> 
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">เลขประจำตัว :</label>
                            </div>
                            <div class="field-body">
                                <div class="own-text-middle">
                                    0105547022097
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column  is-3 ">
                        
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-3 ">

                    </div>
                    <div class="column  is-6 "> 
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">ชื่อบริษัท :</label>
                            </div>
                            <div class="field-body">
                                <div class="own-text-middle">
                                    บริษัท ไบโอ พาแน็ค ดีเวลลอปเมนท์ (ประเทศไทย) จำกัด
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column  is-3 ">
                        
                    </div>
                </div>
                 
                <div class="columns">
                    <div class="column  is-3 ">

                    </div>
                    <div class="column  is-6 "> 
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">ประเภท :</label>
                            </div>
                            <div class="field-body">
                                <div class="own-text-middle">
                                    -
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column  is-3 ">
                        
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-3 ">

                    </div>
                    <div class="column  is-6 "> 
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">สถานะ :</label>
                            </div>
                            <div class="field-body">
                                <div class="own-text-middle">
                                    ยังไม่ได้ลงทะเบียน
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column  is-3 ">
                        
                    </div>
                </div>


                </div>
        </div>




               
        
        <!-- </paper-material> -->
        
        `;
  }

  _firstRendered() {
    var pages = this.shadowRoot.querySelector("iron-pages");

    console.log(pages);
    setInterval(function() {
      pages.selectNext();
    }, 3000);
    // pages.addEventListener('click', function (e) {

    //     pages.selectNext();
    // });
  }
}

customElements.define("exporter-sign", ExporterSign);
