import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../../style/bulma-styles'
import "../../../components/my-tabs/my-tabs";
import "../../../components/my-form/my-dropdown"

class ExporterFile extends LitElement {
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

        #customers {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #customers td, #customers th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        /* #customers tr:nth-child(even){background-color: #f2f2f2;} */

        /* #customers tr:hover {background-color: #ddd;} */

        #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #D8E5F1;
            color: #4a4a4a;
        }
        </style>
        <h6 class="title is-6">แนบเอกสาร</h6>
        <p>
                        <hr>

        <table id="customers" >
        <tr>
            <th style="text-align:center">ลำดับ</th>
            <th style="text-align:center">ประเภทเอกสาร</th>
            <th style="text-align:center">ชื่อเอกสาร</th>
            <th style="text-align:center">จัดการ</th>
        </tr>
        <tr>
            <td style="text-align:center">1</td>
            <td>สำเนาบัตรผู้มีอำนาจ</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="text-align:center">2</td>
            <td>กรมการค้าภายใน</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="text-align:center">3</td>
            <td>หนังสือผู้รับมอบ</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="text-align:center">4</td>
            <td>ผู้มีอำนาจ บจ.5</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="text-align:center">5</td>
            <td>ภาษีมูลค่าเพิ่ม</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="text-align:center">6</td>
            <td>นิติบุคคล</td>
            <td></td>
            <td></td>
        </tr>
                
                
        


        `;
    }

  

}

customElements.define('exporter-file', ExporterFile);