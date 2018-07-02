import { LitElement, html } from "@polymer/lit-element";

import BulmaStyle from "../../style/bulma-styles";
class headerOne extends LitElement {
    _render() {
        return html`
         ${BulmaStyle()}
            <nav
          class="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="#">
                <img
                  src="https://i.imgur.com/ERcZLTw.png"
                  alt="DEVAHOY LOGO"
                  width="112"
                  height="28"
                />
              </a>
            </div>
            <div class="navbar-menu">
              <div class="navbar-end">
                <a
                  exact
                  to="/"
                  activeclass="is-active"
                  class="navbar-item"
                >
                  Home
                </a>
                <a
                  to="/posts"
                  activeclass="is-active"
                  class="navbar-item"
                >
                  Posts
                </a>
                <a
                  to="/projects"
                  activeclass="is-active"
                  class="navbar-item"
                >
                  Projects
                </a>
                <a
                  to="/about"
                  activeclass="is-active"
                  class="navbar-item"
                >
                  About
                </a>
                <a class="navbar-item" href="#" target="_blank">
                  Star on <i class="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
        </nav>
            `
    }
}
customElements.define('header-one', headerOne)