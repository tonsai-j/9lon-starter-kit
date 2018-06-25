import { LitElement, html } from '@polymer/lit-element';
import './list-file.js'
import { FlexboxGridLit, FlexboxGridRemovePadding } from '../../../style/flexbox-grid-lit';
import {StyleFile} from './style-file.js'
// import './shared-styles.js';

class ListFiles extends LitElement {
    static get properties() {
        return {
            files: Array,
        }
    }
    constructor() {
        super();
        this.files = [
            {
                id: 'asdasdasdkjl',
                name: 'ไฟล์ของฉัน',
                type: 'file', // folder
                // ในกรณีที่เป็น folder ก็จะมี parents id
                parents_id: 'xsdsaddlk-klsdff',
                own: 'ฉัน', //เจ้าของ
                size: 123123,
                permission: '',
                date_updatest: '2018-01-01'
            },
            {
                id: '234234234',
                name: 'เก็บภาพงาน',
                type: 'folder', // folder
                // ในกรณีที่เป็น folder ก็จะมี parents id
                parents_id: 'xsdsaddlk-klsdff',
                own: 'ฉัน', //เจ้าของ
                size: 0,
                permission: '',
                date_updatest: '2018-01-01'
            },
        ]

        for (let index = 0; index < 20; index++) {
            this.files.push({
                id: 'asdasdasdkjl',
                name: 'ไฟล์ของฉัน',
                type: 'file', // folder
                // ในกรณีที่เป็น folder ก็จะมี parents id
                parents_id: 'xsdsaddlk-klsdff',
                own: 'ฉัน', //เจ้าของ
                size: 123123,
                permission: '',
                date_updatest: '2018-01-01'
            },
            {
                id: '234234234',
                name: 'เก็บภาพงาน',
                type: 'folder', // folder
                // ในกรณีที่เป็น folder ก็จะมี parents id
                parents_id: 'xsdsaddlk-klsdff',
                own: 'ฉัน', //เจ้าของ
                size: 0,
                permission: '',
                date_updatest: '2018-01-01'
            })
            
        }
    }
    _render({ files }) {
        return html`
         ${FlexboxGridLit} ${FlexboxGridRemovePadding}
         ${StyleFile}
        <style>
        </style>
        page-list-file LitElement =>
        
        <div class="row line-file">
            <div class="col-xs-6 files">ชื่อไฟล์</div>
            <div class="col-xs-2 files">เจ้าของ</div>
            <div class="col-xs-2 files">แก้ไขล่าสุด</div>
            <div class="col-xs-2 files">ขนาดไฟล์</div>
        </div>
        ${files.map((item) => {     return html`
        <list-file dataFile="${item}"></list-file>
        `     })}
        `;
    }


}

customElements.define('list-files', ListFiles);