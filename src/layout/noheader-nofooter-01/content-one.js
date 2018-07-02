import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
import "./header-one";
import "./footer-one";

class contentOne extends LitElement {
  _render() {
    return html`
          ${bulmaStyles()}
        <div class="">
            <header>
                        <header-one></header-one>
            </header>
            <main>
                <div id="content" class="row container">
                <div class="columns">
          <div class="column">
          <slot name="content"></slot>
          </div>
          </div>
                </div>
            </main>
            <footer>
            <footer-one></footer-one>
            </footer>
        </div> 
        
        
       
        `;
  }
}
customElements.define("content-one", contentOne);
