import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../style/bulma-styles'
// import './components/exporter-profile'

class PageRegist extends LitElement {
    _render() {
        return html`
             ${bulmaStyles()}

             <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li class="is-active"><a href="#" >ข้อมูล</a></li>
                </ul>
            </nav>

        <div class="box">
            <div class="panel">

                <!-- <exporter-profile></exporter-profile> -->
                <!-- <sign-table></sign-table> -->

            </div>
        </div>
        

        `;
    }

  

}

customElements.define('page-regist', PageRegist);