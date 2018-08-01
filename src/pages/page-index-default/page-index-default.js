import { html } from '@polymer/lit-element';
import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../style/bulma-styles'
// import './components/exporter-renew'

class PageIndexDefault extends PageViewElement {
    _render() {
        return html`
             ${bulmaStyles()}
            
             page-index-default
        `;
    }

    _pageActive(params) {
        console.log(params)
        console.log('page-index-default');

    }

}

customElements.define('page-index-default', PageIndexDefault);