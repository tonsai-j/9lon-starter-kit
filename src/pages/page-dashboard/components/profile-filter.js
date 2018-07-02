import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
import '@polymer/paper-input/paper-input'
import '@polymer/paper-button'

// import './shared-styles.js';

class ProfileFilter extends LitElement {
    _render() {
        return html`
        <style>
            
        
            .block-1 {
                width: 1100px;
                height: 120px;
                margin: 20px;
                float: left;
            }
        
            .block-2 {
                width: 120px;
                height: 120px;
                margin: 20px;
                float: right;
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
                background-color: #008CBA;
            }/* Blue */

        </style>
        <!-- <div style="text-align:center"> -->
        <div class="block-1">
            <paper-input id="pid" label="เลขประจำตัวประชาชน" required auto-validate error-message="กรุณากรอกข้อมูล!"></paper-input>
        </div>
        <div class="block-2">
            <paper-button class="button button2" on-click="${(e) => this._search()}">ค้นหา</paper-button>
        </div>
        <!-- </div> -->
        
        
        <div style="text-align:center">
        
            <!-- <paper-material elevation="1" style="text-align:left"> -->
            <!-- <paper-input label="this input requires some text" required auto-validate error-message="needs some text!"> -->
            <!-- </paper-input> -->
            <!-- <paper-button class="pink ">ค้นหา</paper-button> -->
            <!-- </paper-material> -->
        </div>
        
        `;
    }

    test() {
        let nextParams = { x: 2 }
        this._redirect('/page-exporter', nextParams)

    }

    _pageActive(params) {
        console.log(params)
    }

    _search(){
        // this.$.search.value
        var test = this.shadowRoot.querySelector("#pid").value
        var search = test.toLowerCase();
        // const result = this.name.filter(word => word.firstName.toLowerCase().includes(search));
        // this.name = result
        // this.name = this.name.slice(0)
        // console.log(result)
        console.log(search)
        this.dispatchEvent(new CustomEvent('page-search-filter', {
            bubbles: true, composed: true, detail: { search : search }
          }));
        
    }
}

customElements.define('profile-filter', ProfileFilter);