import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
//import '@polymer/paper-button'
import bulmaStyles from '../../../style/bulma-styles'
import '@polymer/iron-pages'
import '@polymer/paper-icon-button'
// //import "@polymer/iron-icons/iron-icons";
import { FlexboxGridLit, FlexboxGridRemovePadding } from '../../../style/flexbox-grid-lit';

class ExporterTable extends LitElement {
    static get properties() {
        return {

        };
    }
    constructor() {
        super()
    }
    _render({ name }) {
        return html`
         ${bulmaStyles()} ${FlexboxGridLit} ${FlexboxGridRemovePadding}
        <style>
            .pricing__table {
                width: 100%;
                overflow-x: auto;
            }
        
            .table__wrapper {
                overflow-x: auto;
            }
        </style>
        <section>
            <!-- <div class="hero-body"> -->
                <div class="container">
                    <h1 class="subtitle" style="text-align:left">
                        รายชื่อคณะกรรมการ
                    </h1>
                    <a class="button is-info is-focused">Focus</a>
                </div>
            <!-- </div> -->
        </section>
        <!-- <p>
                                                                                                                                                                                                            <hr>
                                                                                                                                                                                                            <br> -->
        
        
        
        <div class="panel-block">
            <table class="table is-bordered pricing__table">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>คำนำหน้าชื่อ</th>
                        <th>ชื่อ</th>
                        <th>นามสกุล</th>
                        <th>จัดการ</th>
                    </tr>
                </thead>
        
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>₹ 70,523.90</td>
                        <td>₹ 70,523.90</td>
                        <td>₹ 70,523.90</td>
                        <td>₹ 70,523.90</td>
                    </tr>
                    <tr>
                        <td>
                            2
                        </td>
                        <td>₹ 70,523.90</td>
                        <td>₹ 70,523.90</td>
                        <td>₹ 70,523.90</td>
                        <td>₹ 70,523.90</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <br>
        

        
        `;
    }

}

customElements.define('exporter-table', ExporterTable);