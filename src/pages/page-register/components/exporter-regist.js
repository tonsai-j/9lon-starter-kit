import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
//import '@polymer/paper-button'
import bulmaStyles from '../../../style/bulma-styles'
import '@polymer/iron-pages'
import '@polymer/paper-icon-button'
//import "@polymer/iron-icons/iron-icons";
import { FlexboxGridLit, FlexboxGridRemovePadding } from '../../../style/flexbox-grid-lit';

class ExporterRegist extends LitElement {
    static get properties() {
        return {

        };
    }
    constructor() {
        super()
    }
    render() {
        return html`
         ${bulmaStyles(this)} ${FlexboxGridLit} ${FlexboxGridRemovePadding}
        <style>
        </style>
        <section>
            <!-- <div class="hero-body"> -->
                <div class="container">
                    <h1 class="title" style="text-align:center">
                        ข้อมูลส่วนตัว
                    </h1>
                </div>
            <!-- </div> -->
        </section>
        <p>
            <hr>
            <br>

            
        
            <a class="button is-info is-focused is-medium">รายละเอียด</a>
            <a class="button is-info is-focused is-medium">เอกสารหลักฐาน</a>
            <br>
            <br>
            <div class="box">
                <div class="panel">
                    <!-- <p class="panel-heading">Some heading</p> -->
                    <!-- <p>รายละเอียดผู้ส่งออก</p> -->
                    <h4 class="title is-4">รายละเอียดผู้ส่งออก</h4>
        
                    <p>
                        <hr>
                        <!-- <br> -->
                        <div class="row">
                            <div class="field column is-7">
                                <label class="label">รูปแบบกิจการ :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="รูปแบบกิจการ :">
                                </div>
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="field column is-2">
                                <label class="label">เลขประจำตัวผู้เสียภาษี:</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="เลขประจำตัวผู้เสียภาษี :">
                                </div>
                            </div>
                            <div class="field column is-5">
                                <label class="label">ชื่อบริษัท :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="ชื่อบริษัท :">
                                </div>
                            </div>
                            <div class="field column is-5">
                                <label class="label">ชื่อบริษัท (อังกฤษ) :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="ชื่อบริษัท (อังกฤษ) :">
                                </div>
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="field column is-7">
                                <label class="label">ที่อยู่ :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="ที่อยู่ :">
                                </div>
                            </div>
                            <div class="field column is-5">
                                <label class="label">จังหวัด / ไปรษณีย์ :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="จังหวัด / ไปรษณีย์ :">
                                </div>
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="field column is-7">
                                <label class="label">ที่อยู่ (อังกฤษ) :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="ที่อยู่ (อังกฤษ) :">
                                </div>
                            </div>
                            <div class="field column is-5">
                                <label class="label">จังหวัด / ไปรษณีย์ (อังกฤษ) :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="จังหวัด / ไปรษณีย์ (อังกฤษ) :">
                                </div>
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="field column is-3">
                                <label class="label">หมายเลขโทรศัพท์ :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="หมายเลขโทรศัพท์ :">
                                </div>
                            </div>
                            <div class="field column is-4">
                                <label class="label">แฟกซ์ :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="แฟกซ์ :">
                                </div>
                            </div>
                            <div class="field column is-5">
                                <label class="label">อีเมลล์ :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="อีเมลล์ :">
                                </div>
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="field column is-3">
                                <label class="label">วันที่อนุมัติ :</label>
                                <div class="control">
                                    <input class="input " type="date" placeholder="วันที่อนุมัติ :">
                                </div>
                            </div>
                            <div class="field column is-4">
                                <label class="label">วันที่ส่งออกล่าสุด :</label>
                                <div class="control">
                                    <input class="input " type="date" placeholder="วันที่ส่งออกล่าสุด :">
                                </div>
                            </div>
                            <div class="field column is-5">
                                <label class="label">วันที่หมดอายุ :</label>
                                <div class="control">
                                    <input class="input " type="date" placeholder="วันที่หมดอายุ :">
                                </div>
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="field column is-3">
                                <label class="label">เลขที่หนังสืออนุญาต ปกข :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="เลขที่หนังสืออนุญาต ปกข :">
                                </div>
                            </div>
                            <div class="field column is-4">
                                <label class="label">วันที่หนังสืออนุญาต ปกข :</label>
                                <div class="control">
                                    <input class="input " type="date" placeholder="วันที่หนังสืออนุญาต ปกข :">
                                </div>
                            </div>
                            <div class="field column is-5">
                                <label class="label">วันที่หนังสืออนุญาต ปกข หมดอายุ :</label>
                                <div class="control">
                                    <input class="input " type="date" placeholder="วันที่หนังสืออนุญาต ปกข หมดอายุ :">
                                </div>
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="field column is-3">
                                <label class="checkbox">
                                    <input type="checkbox"> สมาคมผู้ส่งออกข้าวไทย :
                                </label>
                            </div>
                            <div class="field column is-3">
                                <label class="label">ประเภทใบอนุญาต :</label>
                                <div class="control">
                                    <input class="input " type="text" placeholder="ประเภทใบอนุญาต :">
                                </div>
                            </div>
                        </div>
        
                </div>
            </div>
        `;
    }

}

customElements.define('exporter-regist', ExporterRegist);