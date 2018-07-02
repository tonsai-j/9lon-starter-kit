import { LitElement, html } from "@polymer/lit-element";
import BulmaStyle from "../../style/bulma-styles";
class headerTwo extends LitElement {
  _firstRendered() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
      this.shadowRoot.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach($el => {
        $el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;

          var $target = this.shadowRoot.querySelector("#" + target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }
  _render() {
    return html`
    ${BulmaStyle()}
    <style>
    nav{
        height:64px;
    }
    </style>
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

            `;
  }
}
customElements.define("header-two", headerTwo);
