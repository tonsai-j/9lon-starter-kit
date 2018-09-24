import {LitElement, html, property} from '@polymer/lit-element';
import bulmaStyles from "../../style/bulma-styles";
import "./header-one";
import "./header-nav";
import "./footer-one";

class contentOne extends LitElement {
  render() {
    return html`
          ${bulmaStyles(this)}
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
