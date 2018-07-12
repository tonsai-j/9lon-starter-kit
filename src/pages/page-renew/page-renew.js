import { html } from '@polymer/lit-element';
import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../style/bulma-styles'
import './components/exporter-renew'

class PageRenew extends PageViewElement {
    _render() {
        return html`
             ${bulmaStyles()}
            
            ssssssssss
        `;
    }

    _pageActive(params) {
        console.log(params)
        console.log('page-list-file');

    }

}

customElements.define('page-renew', PageRenew);