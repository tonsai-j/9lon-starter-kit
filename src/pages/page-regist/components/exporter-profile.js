import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../../style/bulma-styles'
import "../../../components/my-tabs/my-tabs";
import "./exporter-detail"
import "./exporter-file"


class ExporterProfile extends LitElement {
    static get properties() {
        return {
          seletedTab: Number
        };
      }
      constructor() {
        super();
        this.seletedTab = 0;
        this._setValueProps = this._setValueProps.bind(this);
      }
    _render({seletedTab}) {
        return html`
             ${bulmaStyles(this)}
             <style>
            input {
                width: 100%;
                box-sizing: border-box;
                font-size: 1.5em;
            }
        
            iron-pages {
                width: 100%;
                height: 100%;
                /* font-size: 3em; */
                color: black;
                /* text-align: center; */
            }
        
            iron-pages div {
                width: 100%;
                /* height: 100%; */
                display: flex;
                flex-direction: column;
                justify-content: center;
                /* padding: 4px; */
                box-sizing: border-box;
            }
        
        
            .tabs.is-toggle li.is-active a {
                background-color: #f0f0f0;
                border-color: #efefef;
                color: #fff;
                z-index: 1;
            }

            div.d {
                text-align: right;
            }

            .block-1 {
                width: 120px;
                height: 120px;
                margin: 20px;
                background: #0E9F98;
                float: left;
            }
            .block-2 {
                width: 120px;
                height: 120px;
                margin: 20px;
                background: #04BF9D;
                float: right;
            }
            .topnav-right {
                float: right;
            }
        </style>
        <br>
        <a class="button is-link is-hovered own-flex-middle topnav-right">ลงทะเบียนที่นี่</a>
        <my-tabs selected$="${seletedTab}" 
                name-value="seletedTab" 
                on-tab-selected="${this._setValueProps}" >
            <my-tab >รายละเอียด</my-tab>
            <my-tab >เอกสาร/หลักฐาน</my-tab>
            <!-- <a class="button is-link is-hovered own-flex-middle topnav-right">ลงทะเบียนที่นี่</a> -->
        </my-tabs>




        <div class="box">
            <div class="panel">
            <iron-pages selected="${seletedTab}">
                <div>
                    <exporter-detail></exporter-detail>
                </div>
                <div>
                    <exporter-file></exporter-file>
                </div>
            </iron-pages>
            </div>
        </div>
        `;
    }
    _setValueProps(e) {
        let value = e.detail.value;
        let valueName = e.currentTarget.getAttribute("name-value");
        this[valueName] = value;
        // this._test()
      }

    tab1() {
        console.log(111111111111111111)
        this.seletedTab = 0
    }
    tab2() {
        console.log(222222222222222)
        this.seletedTab = 1
    }
  

}

customElements.define('exporter-profile', ExporterProfile);