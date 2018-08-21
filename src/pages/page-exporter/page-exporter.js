import { html,LitElement } from '@polymer/lit-element';

import bulmaStyles from '../../style/bulma-styles'

class PageExporter extends LitElement {
    _render() {
        return html`
        ${bulmaStyles(this)}
             PageExporter
            <div class="card">
                <h1 on-click="${ e => this.test(e)}">go to dashboard</h1>
            </div>
            หน้าเพจ Exporter 
            <input class="input" type="text" placeholder="Text input" />
                1212
            `;
    }

    test() {
        // this._redirect('/page-dashboard')
        this._test()
        // console.log(11111);
        
    }

    _pageActive(params) {
        // console.log(params)
    }

}

customElements.define('page-exporter', PageExporter);