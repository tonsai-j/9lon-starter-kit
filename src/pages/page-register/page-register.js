import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../style/bulma-styles'
import './components/exporter-regist.js'
import './components/exporter-table.js'

class PageRegister extends LitElement {
    _render() {
        return html`
             ${bulmaStyles()}

            <exporter-regist></exporter-regist>
            <exporter-table></exporter-table>
        `;
    }

    _pageActive(params) {
        console.log(params)
        console.log('page-list-file');

    }

}

customElements.define('page-register', PageRegister);