import { html ,LitElement} from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import './components/list-files.js'
// import './shared-styles.js';

class PageListFile extends LitElement {
    render() {
        return html`
            page-list-file -> <list-files></list-files>
        
        `;
    }

    _pageActive(params){
        console.log(params)
        console.log('page-list-file');
        
    }

}

customElements.define('page-list-file', PageListFile);