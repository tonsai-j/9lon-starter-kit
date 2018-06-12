import { html } from '@polymer/lit-element';
import { PageViewElement } from './../../components/page-view-element.js';

// import './shared-styles.js';

class pageSide extends PageViewElement {
    _render() {
        return html`
         pageSide
        <div class="card">
            <h1 on-click="${ e => this.test(e)}">go to exporter</h1>
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

}

customElements.define('page-side', pageSide);