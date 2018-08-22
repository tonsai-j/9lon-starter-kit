import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../../style/bulma-styles'
import "../../../components/my-tabs/my-tabs";
import "../../../components/my-form/my-dropdown.js"

class ExporterDetail extends LitElement {
    static get properties() {
        return {

        };
      }
      constructor() {
        super();

      }
    _render() {
        return html`
        ${bulmaStyles()}
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
        <h6 class="title is-6">ข้อมูลรายละเอียด</h6>
        <p>
                        <hr>
                <div class="columns">
                    <!-- <div class="column  is-1 ">
                        <div class="own-text-middle d">
                            
                        </div>
                    </div> -->
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            เลขประจำตัวผู้ส่งออก : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                            0105547022097
                        </div>
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            รูปแบบกิจการ : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                    <my-dropdown id="tests" classnylon="" 
                            name-value="contract gender" >
                        <option value="">ไม่สามารถระบุได้</option>
                        <option value="">บริษัทมหาชน จำกัด</option>
                        <option value="">บริษัทจำกัด</option>
                        <option value="">ห้างหุ้นส่วน จำกัด</option>
                        <option value="">สหกรณ์</option>
                        <option value="">วิสาหกิจชุมชน</option>
                        <option value="">บุคคลธรรมดา</option>
                    </my-dropdown> 

                    </div>
                </div>

                <div class="columns">
                    <!-- <div class="column  is-1 ">
                        <div class="own-text-middle d">
                            
                        </div>
                    </div> -->
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            ชื่อบริษัท : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                            บริษัท ไบโอ พาแน็ค ดีเวลลอปเมนท์ (ประเทศไทย) จำกัด
                        </div>
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            ชื่อบริษัท (อังกฤษ) : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                            Bio panax development (Thailand) Co, ltd.
                        </div>

                    </div>
                </div>

                <div class="columns">
                    <!-- <div class="column  is-1 ">
                        <div class="own-text-middle d">
                            
                        </div>
                    </div> -->
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            ที่อยู่ : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        9/5 ตึกน้ำตาลไทยกาญจนบุรี ซ.- ถ.พลับพลาไชย แขวงวัดเทพศิรินทร์ เขตป้อมปราบศัตรูพ่าย
                        </div>
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            จังหวัด / ไปรษณีย์ : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        กรุงเทพมหานคร 10100
                        </div>

                    </div>

                </div>

                <div class="columns">
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            ที่อยู่ (อังกฤษ) : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        9/5 Thai sugar mill building Wat Thep Si Rin, POM PRAP SATTRU PHAI
                        </div>
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            จังหวัด / ไปรษณีย์ : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        Bangkok 10100
                        </div>

                    </div>

                </div>

                <div class="columns">
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            อีเมลล์ : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        anuchbiopanax@gmail.com
                        </div>
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            หมายเลขโทรศัพท์ : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        02-225-7799
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            แฟกซ์ : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        02-221-9972
                        </div>
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            สมาคมผู้ส่งออกข้าวไทย : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            เลขที่หนังสืออนุญาต ปกข : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <!-- <div class="own-text-middle b" >
                        
                        </div> -->
                        <input class="input" type="date" >
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            วันที่หนังสืออนุญาต ปกข : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <!-- <div class="own-text-middle b">
                        
                        </div> -->
                        <input class="input" type="date" >
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            วันที่หนังสืออนุญาต ปกข หมดอายุ : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <!-- <div class="own-text-middle b">
                        
                        </div> -->
                        <input class="input" type="date" >
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            ประเภทใบอนุญาต : 
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <!-- <div class="own-text-middle b">
                        
                        </div> -->
                        <my-dropdown id="tests" classnylon="" 
                            name-value="contract gender" >
                        <option value="">ทั่วไป</option>
                        <option value="">ชายแดน</option>
                        <option value="">ข้าวสารบรรจุกล่องหรือหีบห่อ</option>
                    </my-dropdown>
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                          
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        </div>
                    </div>
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            โลโก้บริษัท :
                        </div>
                    </div>
                    <div class="column  is-4 ">
                    <div class="field">
                        <div class="file is-small has-name">
                            <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                                <span class="file-label">
                                เลือกไฟล์
                                </span>
                            </span>
                            <span class="file-name">
                                ไม่ได้เลือกไฟล์ใด
                            </span>
                            </label>
                        </div>
                    </div>
                    </div>
                </div>

        <h6 class="title is-6">รายชื่อคณะกรรมการ</h6>

                <div class="columns">
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            1.
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        นาย นพพร  ว่องวัฒนะสิน
                        </div>
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                       
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                            2.
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        นาย กิติวัฒน์  ตั้งกิจงามวงศ์
                        </div>
                    </div>

                    <div class="column  is-2 ">
                        <div class="own-text-middle d">
                           
                        </div>
                    </div>
                    <div class="column  is-4 ">
                        <div class="own-text-middle b">
                        
                        </div>
                    </div>
                </div>


        `;
    }

  

}

customElements.define('exporter-detail', ExporterDetail);