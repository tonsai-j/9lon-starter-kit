import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
//import '@polymer/paper-button'
import bulmaStyles from '../../../style/bulma-styles'
import '@polymer/iron-pages'
import '@polymer/paper-icon-button'
// //import "@polymer/iron-icons/iron-icons";

class ManageRegister extends LitElement {
    static get properties() {
        return {

        };
    }
    constructor() {
        super()
    }
    render() {
        return html`
         ${bulmaStyles(this)}
        <style>
        </style>
        <section>
            <div class="hero-body">
                <div class="container">
                    <h1 class="title" style="text-align:center">
                        ข้อมูลส่วนตัว
                    </h1>
                </div>
            </div>
        </section>
        <p>
            <hr>
            <br>
            <div class="columns is-desktop">
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="ชื่อบริษัท :">
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="ชื่อบริษัท (อังกฤษ) :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="ที่อยู่ :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="จังหวัด / ไปรษณีย์ :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="ที่อยู่ (อังกฤษ) :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="จังหวัด / ไปรษณีย์ (อังกฤษ) :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="อีเมลล์">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="หมายเลขโทรศัพท์ :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="แฟกซ์ :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="วันที่อนุมัติ :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="วันที่ส่งออกล่าสุด :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="วันที่หมดอายุ :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="เลขที่หนังสืออนุญาต ปกข :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="วันที่หนังสืออนุญาต ปกข :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="วันที่หนังสืออนุญาต ปกข หมดอายุ :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="สมาคมผู้ส่งออกข้าวไทย :">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input " type="text" placeholder="ประเภทใบอนุญาต :">
                        </div>
                    </div>
                </div>
            </div>
        
        `;
    }

}

customElements.define('manage-register', ManageRegister);