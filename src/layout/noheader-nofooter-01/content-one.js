import { LitElement, html } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
import "./header-one";
import "./header-nav";
import "./footer-one";

class contentOne extends LitElement {
  _render() {
    return html`
          ${bulmaStyles()}
          <style>
          /* .warpx{
            position: relative;
            min-height: 100%;
          }
          footer {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 100px;
            width: 100%;
            overflow: hidden;
          } */
          </style>
        <div class="warpx">
            <header>
                <header-one></header-one>
                <header-nav></header-nav>
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
