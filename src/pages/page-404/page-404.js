import { html } from '@polymer/lit-element';
import { PageViewElement } from './../../components/page-view-element.js';

// import './shared-styles.js';

class Page404 extends PageViewElement {
    _render() {
        return html`
            Page404
        
        `;
    }

    _pageActive(params){
        console.log(params)
    }

}

customElements.define('page-404', Page404);