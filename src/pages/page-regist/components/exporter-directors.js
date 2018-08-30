import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../../style/bulma-styles'
import "../../../components/my-tabs/my-tabs";
import "../../../components/my-form/my-dropdown"

class ExporterDerectors extends LitElement {
    static get properties() {
        return {

        };
      }
      constructor() {
        super();

      }
    render() {
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
        <h6 class="title is-6">สถานะการดำเนินการ</h6>

                
                
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

customElements.define('exporter-derectors', ExporterDerectors);