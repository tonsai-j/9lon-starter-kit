import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
//import '@polymer/paper-button'
import bulmaStyles from '../../../style/bulma-styles'
import '@polymer/iron-pages'
import '@polymer/paper-icon-button'
// //import "@polymer/iron-icons/iron-icons";

class ExporterManage extends LitElement {
    static get properties() {
        return {
            name: Array,
            button_tabs: Number
        };
    }
    constructor() {
        super()
        this.button_tabs = 0
    }
    render() {
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
                height: 500px;
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
                background-image: url("https://cdn-images-1.medium.com/max/1200/1*yNDx7AIVM0DvsouLfYjR4g.png");
            }
        
            iron-pages div:nth-child(2) {
                background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFR3maypCpITItODx-Ieck9WfBnHqIkhn1Qkj-y3OfefERUr14");
        
            }
        
            iron-pages div:nth-child(3) {
                background-color: #f2f1f9;
            }
        
            .right {
                position: absolute;
                right: 20px;
                width: 200px;
                height: 50px;
                bottom: 20px;
                /* border: 3px solid #73AD21; */
                padding: 10px;
            }
        
            .tabs.is-toggle li.is-active a {
                background-color: #f0f0f0;
                border-color: #efefef;
                color: #fff;
                z-index: 1;
            }
        </style>
        
        
        <paper-material elevation="0">
            <br>
            <br>
            <h3 class="title is-4" style="text-align:center">จัดการทะเบียน</h3>
            <div class="tabs is-toggle is-fullwidth is-large" style="margin-bottom: 0rem;">
                <ul>
                    <li .class="${this.button_tabs === 0 ? 'is-active' : ''}" on-click="${(e) => this.tab1()}">
                        <a>
                            <span class="icon is-small">
                                <i class="fas fa-image" aria-hidden="true"></i>
                            </span>
                            <span>ลงทะเบียน</span>
                        </a>
                    </li>
                    <li .class="${this.button_tabs === 1 ? 'is-active' : ''}" on-click="${(e) => this.tab2()}">
                        <a>
                            <span class="icon is-small">
                                <i class="fas fa-music" aria-hidden="true"></i>
                            </span>
                            <span>ต่ออายุ</span>
                        </a>
                    </li>
                    <li .class="${this.button_tabs === 2 ? 'is-active' : ''}" on-click="${(e) => this.tab3()}">
                        <a>
                            <span class="icon is-small">
                                <i class="fas fa-film" aria-hidden="true"></i>
                            </span>
                            <span>เปลี่ยนประเภท</span>
                        </a>
                    </li>
                </ul>
            </div>
        
            <iron-pages selected="${this.button_tabs}">
                <div>
                    <span class="right">
        
                        <a id="registerExporter" class="button is-success is-focused " style="width:200px;height:50px">ลงทะเบียน</a>
                    </span>
                </div>
        
                <div>
                    <span class="right">
                        <a id="renewExporter" class="button is-info  is-focused " style="width:200px;height:50px">ต่ออายุ</a>
                    </span>
                </div>
        
                <div>
                    <span class="right">
                        <a class="button is-warning is-focused " style="width:200px;height:50px">เปลี่ยนประเภท</a>
                    </span>
                </div>
            </iron-pages>
        
        </paper-material>


        `;
    }
    registerExporter(e) {
        console.log('bbbbbbbbbbbbbbbbbb')
        this.dispatchEvent(new CustomEvent('change-page', {
            bubbles: true, composed: true, detail: { path: '/page-register', params: '' }
        }));
    }
    renewExporter(e) {
        console.log('AAAAAAAAAA')
        this.dispatchEvent(new CustomEvent('change-page', {
            bubbles: true, composed: true, detail: { path: '/page-renew', params: '' }
        }));
    }
    tab1() {
        // console.log(111111111111111111)
        this.button_tabs = 0
    }
    tab2() {
        // console.log(222222222222222)
        this.button_tabs = 1
    }
    tab3() {
        // console.log(33333333333333)
        this.button_tabs = 2
    }
    firstUpdated() {
        var pages = this.shadowRoot.querySelector("#registerExporter")
        pages.addEventListener('click', this.registerExporter.bind(this));

        var pages = this.shadowRoot.querySelector("#renewExporter")
        pages.addEventListener('click', this.renewExporter.bind(this));
    }
}

customElements.define('exporter-manage', ExporterManage);