import { html ,LitElement} from '@polymer/lit-element';
import bulmaStyles from '../../style/bulma-styles'
// import './components/exporter-renew'

class PageIndexDefault extends LitElement {
    _render() {
        return html`
             ${bulmaStyles(this)}
            
             page-index-default
        `;
    }

    _pageActive(params) {
        console.log(params)
        console.log('page-index-default');

    }

}

customElements.define('page-index-default', PageIndexDefault);