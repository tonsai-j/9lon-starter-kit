import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../style/bulma-styles'
import './exporter-search'
import '../../components/my-breadcrumb'

class PageSearch extends LitElement {
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
    render() {
        return html`
             ${bulmaStyles()}

            <my-breadcrumb value=${brk}></my-breadcrumb>

        <!-- <div class="box">
            <div class="panel"> -->
                <exporter-search></exporter-search>
                <!-- <sign-table></sign-table> -->

            <!-- </div>
        </div> -->
        

        `;
    }

  

}

customElements.define('page-search', PageSearch);