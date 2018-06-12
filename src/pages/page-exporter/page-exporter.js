import { html } from '@polymer/lit-element';
import { PageViewElement } from './../../components/page-view-element.js';

// import './shared-styles.js';

class PageExporter extends PageViewElement {
    _render() {
        return html`
            PageExporter
            <div class="card">
                <h1 on-click="${ e => this.test(e)}">go to dashboard</h1>
            </div>
            หน้าเพจ Exporter
        `;
    }

    test() {
        this._redirect('/page-dashboard')
    }

    _pageActive(params) {
        console.log(params)
    }

}

customElements.define('page-exporter', PageExporter);