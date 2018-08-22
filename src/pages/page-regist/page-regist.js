import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../style/bulma-styles'
import './components/exporter-profile'
import '../../components/my-breadcrumb'

class PageRegist extends LitElement {
    static get properties() {
        return {
          brk: Array,
        };
      }
      constructor() {
        super();
        this.brk = [
          {
            href: "/",
            name: "Home"
          },
          {
            href: "/renew",
            name: "Renew"
          },
          {
            href: "/index",
            name: "index"
          },
          {
            href: "/",
            name: "คนเดียว"
          }
        ];
      }
    _render({brk}) {
        return html`
             ${bulmaStyles(this)}

            <my-breadcrumb value=${brk}></my-breadcrumb>

        <!-- <div class="box">
            <div class="panel"> -->

                <exporter-profile></exporter-profile>
                <!-- <sign-table></sign-table> -->

            <!-- </div>
        </div> -->
        

        `;
    }

  

}

customElements.define('page-regist', PageRegist);