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


class SignTable extends LitElement {
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
         ${bulmaStyles(this)} 
         ${ownStyle} 
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
        <br>
        <h6 class="title is-6">สถานะการดำเนินการ</h6>
        
        <table id="customers">
        <tr>
            <th>ลำดับ</th>
            <th>การดำเนินงาน</th>
            <th>คนดำเนินการ</th>
            <th>วันที่</th>
        </tr>
        <!-- <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
        </tr> -->
        <tr>
            <td colspan="4" style="text-align:center" >
               <a href="/regist"><u> ลงทะเบียนที่นี่ </u></a>
               
            </td>
            <!-- <td>Christina Berglund</td>
            <td>Sweden</td>
            <td>Germany</td> -->
        </tr>
      
       
       
        </table>

        `;
  }

}

customElements.define("sign-table", SignTable);
