import { LitElement, html } from "@polymer/lit-element";
import './layout/noheader-nofooter-01/content-one'
import './layout/onheader-nofooter-02/content-two'
import './layout/onheader-nofooter-03/content-three'

class MyRoutes extends LitElement {
    static get properties() {
        return {
            page: String
        }
    }
    _render({ page }) {
        return html`
        <style>
            .page {
                display: none;
            }
        
            .page[active] {
                display: block;
            }
        </style>
        
        <content-one class="page" active?="${page === 'page-dashboard'}">
            <page-dashboard slot="content" active></page-dashboard>
        </content-one>
        
        <content-two class="page" active?="${page === 'page-exporter'}">
            <page-exporter slot="content" active></page-exporter>
        </content-two>
        <content-two class="page" active?="${page === 'page-form'}">
            <page-form slot="content" active></page-form>
        </content-two>

        <content-three class="page" active?="${page === 'page-list-file'}">
            <page-list-file slot="content" active></page-list-file>
        </content-three>
        
        
        <content-two class="page" active?="${page === 'page-dashboard/page-side'}">
            <page-side slot="content" active></page-side>
        </content-two>
        `


    }
}

customElements.define('my-routes', MyRoutes)