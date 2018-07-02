import { html } from '@polymer/lit-element';
import { PageViewElement } from './../../components/page-view-element';
import '@polymer/paper-material'
import '@polymer/paper-input/paper-input'
import '@polymer/paper-button'

import './components/profile-filter'
import './components/profile-table'
import './components/profile-input'
import './components/page-slide'
import './components/page-manage'
import './components/page-new'
import bulmaStyles from '../../style/bulma-styles'
import './components/page-register'
// import './shared-styles.js';

import './components/exporter-nav'
import './components/exporter-slide'
import './components/exporter-manage'
import './components/exporter-card'

class PageDashboard extends PageViewElement {
    static get properties() {
        return {
            name: Array
        };
    }
    constructor() {
        super()
        this.name = [
            {
                firstName: 'lissara',
                lastName: 'kraipetch'
            },
            {
                firstName: 'lookpad',
                lastName: 'kraipetch'
            },
        ]
    }
    _render({name}) {
        return html`
        ${bulmaStyles()}

        <!-- <input class="input" type="text" placeholder="Text input"> -->
        <!-- <profile-filter  ></profile-filter>
        <profile-input></profile-input>
        <profile-table name="${name}"></profile-table> -->

        <!-- <page-slide></page-slide>
        <page-manage></page-manage>
        <page-new></page-new> -->

        <!-- <page-register></page-register> -->
        <exporter-nav></exporter-nav>
        <exporter-slide></exporter-slide>
        <exporter-manage></exporter-manage>
        <exporter-card></exporter-card>
        
        <!-- <style>
            paper-material {
                display: inline-block;
                background: white;
                box-sizing: border-box;
                margin: 20px;
                padding: 20px;
                border-radius: 2px;
                height: 500px;
                width: 1000px;
            }
        </style> -->
        <!-- PageDashboard -->
        <!-- <div class="card">
                            <h1 on-click="${ e => this.test(e)}">go to exporter</h1>
                        </div> -->
        <!-- <div style="text-align:center">
        
            <paper-material elevation="1" style="text-align:left">
                <paper-input label="this input requires some text" required auto-validate error-message="needs some text!">
                </paper-input>
                <paper-button class="pink">ค้นหา</paper-button>
            </paper-material>
        </div> -->
        <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, lorem id efficitur tincidunt, neque ligula euismod
                                                                lectus, in imperdiet erat libero eu ligula. In ac varius nisl. Aliquam nunc augue, elementum eget dapibus quis, elementum
                                                                id diam. Etiam condimentum, lacus et facilisis efficitur, lectus velit commodo lacus, quis pellentesque orci massa
                                                                quis turpis.  -->
        
        `;
    }

    _firstRendered() {
        this.addEventListener('page-search-filter', (e) => {
        //   console.log(e.detail.search)
    
        // this.$.search.value
        var test = e.detail.search
        var search = test.toLowerCase();
        const result = this.name.filter(word => word.firstName.toLowerCase().includes(search));
        this.name = result
        this.name = this.name.slice(0)
        // console.log(result)
    
        
        })

        this.addEventListener('add-name', (e) => {
          console.log(e.detail)
          this.name.push(e.detail)
        this.name = this.name.slice(0)
        })


    }

  
    
    test() {
        let nextParams = { x: 2 }
        this._redirect('/page-exporter', nextParams)

    }

    _pageActive(params) {
        console.log(params)
    }

}

customElements.define('page-dashboard', PageDashboard);