import { LitElement, html } from '@polymer/lit-element';
import '@polymer/iron-icon'
import '@polymer/iron-icons/iron-icons'
import { FlexboxGridLit, FlexboxGridRemovePadding } from '../../../style/flexbox-grid-lit';
// import './shared-styles.js';
import { StyleFile } from './style-file.js'

class ListFile extends LitElement {
    static get properties() {
        return {
            dataFile: Object,
        }
    }
    _render({ dataFile }) {
        return html`
         ${FlexboxGridLit} ${FlexboxGridRemovePadding} ${StyleFile}
        <style>
            iron-icon {
                -iron-icon-height: 25px;
                --iron-icon-width: 25px;
                padding: 0px 16px 0px 16px;
                color: #5F6368;
            }
        </style>
        <div class="row line-file">
            <div class="col-xs-6 files">
            <iron-icon icon="${dataFile.type === 'folder' ? 'folder' : 'description'}"></iron-icon> ${dataFile.name}
            </div>
            <div class="col-xs-2 files">
                ${dataFile.own}
            </div>
            <div class="col-xs-2 files">
                ${dataFile.date_updatest}
            </div>
            <div class="col-xs-2 files">
                ${dataFile.size}
            </div>
        </div>
        `;
    }

}

customElements.define('list-file', ListFile);