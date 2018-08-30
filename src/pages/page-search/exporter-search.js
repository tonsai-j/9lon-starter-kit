import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../style/bulma-styles'
import '../../components/my-form/my-dropdown'

class ExporterSearch extends LitElement {
    static get properties() {
        return {
          brk: Array,
        };
      }
      constructor() {
        super();
        this.brk = [
          {
            href: "/",
            name: "Home"
          },
          {
            href: "/renew",
            name: "Renew"
          },
          {
            href: "/index",
            name: "index"
          },
          {
            href: "/",
            name: "คนเดียว"
          }
        ];
      }
    render() {
        return html`
             ${bulmaStyles()}
<br>
<h4 class="title is-4" style="text-align:center">ค้นหาทะเบียนผู้ส่งออกข้าว</h4>
            <!-- <my-breadcrumb value=${brk}></my-breadcrumb> -->

        <!-- <div class="box">
            <div class="panel"> -->
        <div class="columns">
            <div class="column  is-2 ">
                    <div class="own-text-middle d">
                        รูปแบบกิจการ : 
                    </div>
            </div>
            <div class="column  is-2 ">
                    <my-dropdown id="tests" classnylon="" 
                            name-value="contract gender" >
                        <option value="">เลข ข/ช</option>
                        <option value="">ชื่อบริษัท</option>
                        <option value="">ชื่อกรรมการ</option>
                        <option value="">เลขประจำตัวผู้เสียภาษี</option>
                    </my-dropdown> 
            </div>

            <div class="column  is-2 ">
                    <div class="own-text-middle d">
                        คำค้นหา : 
                    </div>
            </div>
            <div class="column  is-4">
                    <input class="input" type="text" placeholder="Text input">
            </div>
        </div>

        <div class="columns">
            <div class="column  is-1 ">
                    <div class="own-text-middle d">
                        ประเภทใบอนุญาต : 
                    </div>
            </div>
            <div class="column  is-2 ">
                    <my-dropdown id="tests" classnylon="" 
                            name-value="contract gender" >
                        <option value="">ทั้งหมด</option>
                        <option value="">ทั่วไป</option>
                        <option value="">ชายแดน</option>
                        <option value="">ข้าวสารบรรจุกล่องหรือหีบห่อ</option>
                        <option value="">ทั่วไปและหีบห่อ</option>
                    </my-dropdown> 
            </div>

            <div class="column  is-2 ">
                    <div class="own-text-middle d">
                        สถานะสมาคมผู้ส่งออกข้าวไทย : 
                    </div>
            </div>
            <div class="column  is-2 ">
                    <my-dropdown id="tests" classnylon="" 
                            name-value="contract gender" >
                        <option value="">ทั้งหมด</option>
                        <option value="">เป็นสมาชิก</option>
                        <option value="">ไม่เป็นสมาชิก</option>
                    </my-dropdown> 
            </div>

            <div class="column  is-1 ">
                    <div class="own-text-middle d">
                        สถานะเลข ข : 
                    </div>
            </div>
            <div class="column  is-2 ">
                    <my-dropdown id="tests" classnylon="" 
                            name-value="contract gender" >
                        <option value="">ทั้งหมด</option>
                        <option value="">รายใหม่</option>
                        <option value="">รายใหม่/รายเดิม</option>
                        <option value="">รายเดิม</option>
                        <option value="">ส่งออกล่าสุด</option>
                        <option value="">ปกติ</option>
                        <option value="">หมดอายุ</option>
                    </my-dropdown> 
            </div>

            <div class="column  is-1 ">
                    <div class="own-text-middle d">
                        สถานะยกเลิก : 
                    </div>
            </div>
            <div class="column  is-2 ">
                    <my-dropdown id="tests" classnylon="" 
                            name-value="contract gender" >
                        <option value="">ทั้งหมด</option>
                        <option value="">ยกเลิก</option>
                        <option value="">ไม่ยกเลิก</option>
                    </my-dropdown> 
            </div>
        </div>

        <div class="columns">
            <div class="column  is-3 ">
                    <div class="own-text-middle d">
                         
                    </div>
            </div>

            <div class="column  is-1 ">
                    <div class="own-text-middle d">
                        วันที่ลงทะเบียน : 
                    </div>
            </div>
            <div class="column  is-2">
                    <input class="input" type="text" placeholder="Text input">
            </div>

            <div class="column  is-1 ">
                    <div class="own-text-middle d">
                        ถึง : 
                    </div>
            </div>
            <div class="column  is-2">
                    <input class="input" type="text" placeholder="Text input">
            </div>

            <div class="column  is-2 ">
                    <div class="own-text-middle d">
                         
                    </div>
            </div>
        </div>

        <div class="columns is-mobile">
  <div class="column is-half is-offset-one-quarter"><a class="button is-danger">Danger</a></div>
</div>
                <!-- <exporter-profile></exporter-profile> -->
                <!-- <sign-table></sign-table> -->

            <!-- </div>
        </div> -->
        

        `;
    }

  

}

// customElements.define('exporter-search', ExporterSearch);
customElements.define('exporter-search', ExporterSearch);