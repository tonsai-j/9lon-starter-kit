import { html, LitElement} from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element';
import '@polymer/paper-material'
import bulmaStyles from '../../style/bulma-styles'

import './components/exporter-slide'
import './components/exporter-manage'
import './components/exporter-card'

import './components/exporter-sign'

class PageDashboard extends LitElement {
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
        <!-- <exporter-slide></exporter-slide> -->
        <!-- <exporter-manage></exporter-manage>
        <exporter-card></exporter-card> -->
        
        <exporter-sign></exporter-sign>
        
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