import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
import '@vaadin/vaadin-grid'
import '@vaadin/vaadin-grid/vaadin-grid-column'
import '@polymer/paper-button'
import '@polymer/paper-input/paper-input'

// import '@polymer/paper-material'
// import '@polymer/paper-input/paper-input'
// import './shared-styles.js';

class ProfileTable extends LitElement {
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
        
            paper-material {
                display: inline-block;
                background: white;
                box-sizing: border-box;
                margin: 20px;
                padding: 20px;
                border-radius: 2px;
                height: 500px;
                width: 1300px;
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
            }
        
            .block-1 {
                width: 1100px;
                height: 120px;
                margin: 20px;
                float: left;
            }
        
            /* Blue */
        </style>
        
        <div style="text-align:center">
            <paper-material elevation="1" style="text-align:left">
        
                <!-- <div class="block-1">
                                    <paper-input id="pid" label="เลขประจำตัวประชาชน" required auto-validate error-message="กรุณากรอกข้อมูล!"></paper-input>
                                </div> -->
                <!-- First name:
                <input type="text" name="FirstName" value=""> 
                Last name:
                <input type="text" name="LastName" value=""> -->
                <paper-button class="button button2" on-click="${(e) => this._add()}">เพิ่ม</paper-button>
        
                <vaadin-grid aria-label="Basic Binding Example" items="${name}">
        
                    <vaadin-grid-column width="60px" flex-grow="0">
                        <template class="header">#</template>
                        <template>[[index]]</template>
                        <!-- If necessary, the footer could be set using <template class="footer"> -->
                        <template class="footer">#</template>
                    </vaadin-grid-column>
        
                    <vaadin-grid-column>
                        <template class="header">First Name</template>
                        <template>[[item.firstName]]</template>
                        <template class="footer">First Name</template>
                    </vaadin-grid-column>
        
                    <vaadin-grid-column>
                        <template class="header">Last Name</template>
                        <template>[[item.lastName]]</template>
                        <template class="footer">Last Name</template>
                    </vaadin-grid-column>
        
                    <vaadin-grid-column width="8em">
                        <template class="header">Address</template>
                        <template>
                            <template>[[item.Address]]</template>
                            <!-- <div style="white-space: normal">[[item.address.street]], [[item.address.city]]</div> -->
                        </template>
                        <template class="footer">Address</template>
                    </vaadin-grid-column>
        
                </vaadin-grid>
        
                <!-- <paper-input label="this input requires some text" required auto-validate error-message="needs some text!"> -->
                <!-- </paper-input> -->
                <!-- <paper-button class="pink ">ค้นหา</paper-button> -->
            </paper-material>
        </div>
        
        `;
    }
    _search() {
        // this.$.search.value
        var test = this.shadowRoot.querySelector("#pid").value
        var search = test.toLowerCase();
        const result = this.name.filter(word => word.firstName.toLowerCase().includes(search));
        this.name = result
        this.name = this.name.slice(0)
        // console.log(result)

    }
    _add() {
        // var fname = this.name
        // console.log(fname)
        // this.name.push({ firstName: "ton", lastName: "kung" })
        // this.name = this.name.slice(0)
        // console.log(this.name)
        this.dispatchEvent(new CustomEvent('add-name', {
            bubbles: true, composed: true, detail: { firstName: "ton", lastName: "kung" }
        }));
    }

    test() {
        let nextParams = { x: 2 }
        this._redirect('/page-exporter', nextParams)

    }

    _pageActive(params) {
        console.log(params)
    }


}

customElements.define('profile-table', ProfileTable);