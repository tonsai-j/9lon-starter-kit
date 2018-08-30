import {LitElement, html, property} from '@polymer/lit-element';
import '@polymer/iron-icon'
// import '@polymer/iron-icons/iron-icons'

class navThree extends LitElement {
    static get properties() {
        return {
            leftMenu: Array,
        }
    }
    constructor() {
        super();
        this.leftMenu = [
            {
                icon: 'cloud',
                name: 'ไฟล์ของฉัน',
                page: ''
            },
            {
                icon: 'create-new-folder',
                name: 'แชร์กับฉัน',
                page: ''
            },
            {
                icon: 'done',
                name: 'ล่าสุด',
                page: ''
            },
            {
                icon: 'cloud-upload',
                name: 'ติดดาว',
                page: ''
            },
            {
                icon: 'cloud-upload',
                name: 'ถังขยะ',
                page: ''
            }
        ]
        // To force all event listeners for gestures to be passive.
        // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
        //  setPassiveTouchGestures(true);
    }
    render() {
        return html`
    <style>
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: auto;
            background-color: #FFF;
        }
    
        li a {
            display: block;
            color: #8f8f8f;
            padding: 8px 16px;
            text-decoration: none;
            border-top-right-radius:50px;
            border-bottom-right-radius: 50px;
        }
    
        li a.active {
            
            background-color: #e8f0fe;
            color: #4285f4;
        }
    
        li a:hover:not(.active) {
            background-color: #F5f5f5;
            color: #5f6368;
        }
    
        iron-icon {
            -iron-icon-height: 30px;
            --iron-icon-width: 30px;
            padding: 0px 16px 0px 0px;
        }
    </style>
    
    <ul>
        <li>
            <a href="#11" class="active">
                <iron-icon icon="cloud"></iron-icon>หน้าแรก
            </a>
        </li>
        ${leftMenu.map((item, index) => {     return html`
        <li>
            <a href="${item.page}">
                <iron-icon icon="${item.icon}"></iron-icon>${item.name}
            </a>
        </li>
        `     })}
    
    
    </ul>
            `
        // 
    }
}
customElements.define('nav-three', navThree)