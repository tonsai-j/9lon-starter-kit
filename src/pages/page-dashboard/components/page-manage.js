import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
//import '@polymer/paper-button'

class PageManage extends LitElement {
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
        <style>
            .tabs {
                max-width: 90%;
                float: none;
                list-style: none;
                padding: 0;
                margin: 75px auto;
                border-bottom: 4px solid #ccc;
            }
        
            .tabs:after {
                content: '';
                display: table;
                clear: both;
            }
        
            .tabs input[type=radio] {
                display: none;
            }
        
            .tabs label {
                display: block;
                float: left;
                width: 33.3333%;
                color: #ccc;
                font-size: 30px;
                font-weight: normal;
                text-decoration: none;
                text-align: center;
                line-height: 2;
                cursor: pointer;
                box-shadow: inset 0 4px #ccc;
                border-bottom: 4px solid #ccc;
                -webkit-transition: all 0.5s;
                /* Safari 3.1 to 6.0 */
                transition: all 0.5s;
            }
        
            .tabs label span {
                display: none;
            }
        
            .tabs label i {
                padding: 5px;
                margin-right: 0;
            }
        
            .tabs label:hover {
                color: #3498db;
                box-shadow: inset 0 4px #3498db;
                border-bottom: 4px solid #3498db;
            }
        
            .tab-content {
                display: none;
                width: 100%;
                float: left;
                padding: 15px;
                box-sizing: border-box;
                background-color: #ffffff;
            }
        
            .tab-content * {
                -webkit-animation: scale 0.7s ease-in-out;
                -moz-animation: scale 0.7s ease-in-out;
                animation: scale 0.7s ease-in-out;
            }
        
            @keyframes scale {
                0% {
                    transform: scale(0.9);
                    opacity: 0;
                }
                50% {
                    transform: scale(1.01);
                    opacity: 0.5;
                }
                100% {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        
            .tabs [id^="tab"]:checked+label {
                background: #FFF;
                box-shadow: inset 0 4px #3498db;
                border-bottom: 4px solid #3498db;
                color: #3498db;
            }
        
            #tab1:checked~#tab-content1,
            #tab2:checked~#tab-content2,
            #tab3:checked~#tab-content3 {
                display: block;
            }
        
            @media (min-width: 768px) {
                .tabs i {
                    padding: 5px;
                    margin-right: 10px;
                }
                .tabs label span {
                    display: inline-block;
                }
                .tabs {
                    max-width: 970px;
                    margin: 50px auto;
                }
            }
        
            .center {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;
            }
        
            .button {
                background-color: #4CAF50;
                /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }
        
            .button2 {
                background-color: #3498db;
            }
        
            div.b {
                position: absolute;
                right: 0;
                width: 100px;
                height: 120px;
                border: 3px solid blue;
            }
        </style>
        
        
        <paper-material elevation="2" align="left">
            <br>
            <h1 style="text-align:center">จัดการทะเบียนผู้ส่งออกข้าว
            </h1>
            <!-- <br> -->
            <div id="selector">
        
            </div>
            <div class="tabs">
                <!-- Radio button and lable for #tab-content1 -->
                <input type="radio" name="tabs" id="tab1" checked>
                <label for="tab1">
                    <i class="fa fa-rocket" aria-hidden="true"></i>
                    <span>ลงทะเบียน</span>
                </label>
                <!-- Radio button and lable for #tab-content2 -->
                <input type="radio" name="tabs" id="tab2">
                <label for="tab2">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <span>ต่ออายุ</span>
                </label>
                <!-- Radio button and lable for #tab-content3 -->
                <input type="radio" name="tabs" id="tab3">
                <label for="tab3">
                    <i class="fa fa-heartbeat" aria-hidden="true"></i>
                    <span>เปลี่ยนประเภท</span>
                </label>
                <div id="tab-content1" class="tab-content">
                    <h3>ขั้นตอนการลงทะเบียน</h3>
                    <a href="https://th.bloggif.com/" title="การตัดต่อภาพ">
                        <img src="https://data.bloggif.com/distant/user/store/5/6/d/1/66d238a3896b3a189f432e82371a1d65.jpeg" alt="ตัดต่อสร้าง Bloggif"
                            width="100%" />
                    </a>
                    <p>
                        <!-- Tab content here -->
                    </p>
                    <paper-button class="button button2 b " on-click="${(e) => this._add()}" align="center">ลงทะเบียน</paper-button>
                </div>
                <!-- <paper-button class="button button2 b " on-click="${(e) => this._add()}" align="center">ลงทะเบียน</paper-button> -->
        
                <!-- #tab-content1 -->
                <div id="tab-content2" class="tab-content">
                    <h3>ต่ออายุ</h3>
                    <img src="https://idgthailand.com/wp-content/uploads/2017/01/02.jpg" alt="Trulli" width="100%" height="10%">
                    <p>
                        <!-- Tab content here -->
                    </p>
                    <paper-button class="button button2 " on-click="${(e) => this._add()}">ต่ออายุ</paper-button>
                </div>
                <!-- #tab-content2 -->
                <div id="tab-content3" class="tab-content">
                    <h3>เปลี่ยนประเภท</h3>
                    <img src="http://logisticshubth.com/images/images/2017/2017-04-21-002.png" alt="Trulli" width="100%" height="10%">
                    <p>
                        <!-- Tab content here -->
                    </p>
                    <paper-button class="button button2 " on-click="${(e) => this._add()}">เปลี่ยนประเภท</paper-button>
                </div>
                <!-- #tab-content2 -->
            </div>
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

customElements.define('page-manage', PageManage);