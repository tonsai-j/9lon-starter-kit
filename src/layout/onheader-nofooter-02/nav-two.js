import { LitElement, html } from "@polymer/lit-element";
import "@polymer/iron-icon";
import "@polymer/iron-icons/iron-icons";
import BulmaStyle from "../../style/bulma-styles";
class navTwo extends LitElement {
  static get properties() {
    return {
      leftMenu: Array
    };
  }
  constructor() {
    super();

  }
  _render({ leftMenu }) {
    return html`
    <!-- <style>
      
    </style> -->
    ${BulmaStyle()}
    <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li>
            <a>หน้าจัดการ</a>
          </li>
          <li>
            <a>Customers</a>
          </li>
        </ul>
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li>
            <a>Team Settings</a>
          </li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Plugins</a>
              </li>
              <li>
                <a>Add a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Invitations</a>
          </li>
          <li>
            <a>Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a>Authentication</a>
          </li>
        </ul>
        <p class="menu-label">Transactions</p>
        <ul class="menu-list">
          <li>
            <a>Payments</a>
          </li>
          <li>
            <a>Transfers</a>
          </li>
          <li>
            <a>Balance</a>
          </li>
        </ul>
      </aside>
            `;
    //
  }
}
customElements.define("nav-two", navTwo);
