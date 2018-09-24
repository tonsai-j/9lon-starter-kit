import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
import '@vaadin/vaadin-grid'
import '@vaadin/vaadin-grid/vaadin-grid-column'
//import '@polymer/paper-button'
// import '@polymer/paper-input/paper-input'


class ProfileInput extends LitElement {
    static get properties() {
        return {
            name: Array
        };
    }
    constructor() {
        super()

    }
    render() {
        return html`
 
        <div style="text-align:center">
            <paper-material elevation="1" style="text-align:left">
                First name:
                <input type="text" name="FirstName" value=""> 
                Last name:
                <input type="text" name="LastName" value="">
                <!-- <paper-button class="button button2" on-click="${(e) => this._add()}">เพิ่ม</paper-button> -->
        
            </paper-material>
        </div>
        
        `;
    }


}

customElements.define('profile-input', ProfileInput);