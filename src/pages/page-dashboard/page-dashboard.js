import { html } from '@polymer/lit-element';
import { PageViewElement } from './../../components/page-view-element.js';

// import './shared-styles.js';

class PageDashboard extends PageViewElement {
    _render() {
        return html`
         PageDashboard
        <div class="card">
            <h1 on-click="${ e => this.test(e)}">go to exporter</h1>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, lorem id efficitur tincidunt, neque ligula euismod
                lectus, in imperdiet erat libero eu ligula. In ac varius nisl. Aliquam nunc augue, elementum eget dapibus quis, elementum
                id diam. Etiam condimentum, lacus et facilisis efficitur, lectus velit commodo lacus, quis pellentesque orci massa
                quis turpis. 
        
        `;
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