import { html ,LitElement} from '@polymer/lit-element';
import bulmaStyles from '../../style/bulma-styles'

class PageIndex extends LitElement {
    _render() {
        return html`
         ${bulmaStyles()}
            page-index
            ลองเพิ่มหน้าเองแล้ว
        `;
    }

    _pageActive(params){
        console.log(params)
        console.log('page-index ไง');
        
    }

}

customElements.define('page-index', PageIndex);