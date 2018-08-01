import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import { Mixin, MyMixin, MyMixinTwo, MyMixinThree } from './../../components/my-mixin.js'

import BulmaStyle from '../../style/bulma-styles'
import FontawesomeStyle from '../../style/fontawesome-style'
// import './shared-styles.js';

class PageExporter extends Mixin(LitElement).with(MyMixin, MyMixinTwo, MyMixinThree) {
    _render() {
        return html`
        ${BulmaStyle()}
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