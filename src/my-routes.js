import { LitElement, html } from "@polymer/lit-element";
import "./layout/noheader-nofooter-01/content-one";
import "./layout/onheader-nofooter-02/content-two";
import "./layout/onheader-nofooter-03/content-three";

import BulmaStyle from "./style/bulma-styles";
class MyRoutes extends LitElement {
  static get properties() {
    return {
      page: String
    };
  }
//   static get importPath() {
//     return import.meta.url;
//   }
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
        ${BulmaStyle()}
        <!-- <link rel="stylesheet" href="../style/reset.css"> -->
        <content-one class="page" active?="${page === "page-dashboard"}">
            <page-dashboard slot="content" active></page-dashboard>
        </content-one>
        
        <content-two class="page" active?="${page === "page-exporter"}">
            <page-exporter slot="content" active></page-exporter>
        </content-two>
        <content-two class="page" active?="${page === "page-form"}">
            <page-form slot="content" active></page-form>
        </content-two>

        <content-three class="page" active?="${page === "page-list-file"}">
            <page-list-file slot="content" active></page-list-file>
        </content-three>
        
        
        <content-two class="page" active?="${page === "page-dashboard/page-side"}">
            <page-side slot="content" active></page-side>
        </content-two>


        <content-one class="page" active?="${page === 'page-register'}">
            <page-register slot="content" active></page-register>
        </content-one>

        <content-one class="page" active?="${page === 'page-renew'}">
            <page-renew slot="content" active></page-renew>
        </content-one>
       
        `;
  }
}

customElements.define("my-routes", MyRoutes);
