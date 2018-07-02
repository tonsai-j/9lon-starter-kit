import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
import '@polymer/paper-button'
import bulmaStyles from '../../../style/bulma-styles'
import '@polymer/iron-pages'

class ExporterManage extends LitElement {
    static get properties() {
        return {
            name: Array
        };
    }
    constructor() {
        super()

    }
    _render({ name }) {
        return html`
         ${bulmaStyles()}
        <style>
            input {
                width: 100%;
                box-sizing: border-box;
                font-size: 1.5em;
            }
        
            iron-pages {
                width: 100%;
                height: 400px;
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
                background-color: #F5F5F5;
            }
        
            iron-pages div:nth-child(2) {
                background-color: #00BFFF;
            }
        
            iron-pages div:nth-child(3) {
                background-color: #87CEEB;
            }
        </style>
        
        
        <paper-material elevation="0">
            <br>
            <h1 style="text-align:center">จัดการทะเบียน
            </h1>
            <div class="tabs is-boxed">
                <ul>
                    <li class="is-active">
                        <a>
                            <span class="icon is-small">
                                <i class="fas fa-image" aria-hidden="true"></i>
                            </span>
                            <span>ลงทะเบียน</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small">
                                <i class="fas fa-music" aria-hidden="true"></i>
                            </span>
                            <span>ต่ออายุ</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small">
                                <i class="fas fa-film" aria-hidden="true"></i>
                            </span>
                            <span>เปลี่ยนประเภท</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- <paper-material elevation="2"> -->
                <!-- <br> -->
                <iron-pages selected="0">
                    <div>One</div>
                    <div>Two</div>
                    <div>Three</div>
                </iron-pages>
                <!-- <br> -->
            <!-- </paper-material> -->
        </paper-material>


        `;
    }

    _firstRendered() {
        // var pages = this.shadowRoot.querySelector("iron-pages")

        // console.log(pages)
        // setInterval(function () { pages.selectNext(); }, 3000);
        // pages.addEventListener('click', function (e) {

        //     pages.selectNext();
        // });

        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            // for (i = 0; i < tabcontent.length; i++) {
            //     tabcontent[i].style.display = "none";
            // }
            tablinks = document.getElementsByClassName("tablinks");
            // for (i = 0; i < tablinks.length; i++) {
            //     tablinks[i].className = tablinks[i].className.replace(" active", "");
            // }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }
    }
}

customElements.define('exporter-manage', ExporterManage);