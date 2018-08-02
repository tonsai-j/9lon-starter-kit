import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from '../../style/bulma-styles'
import ownStyle from "../../style/own-style";
class PageLogin extends LitElement {
  _render() {
    return html`
    ${bulmaStyles()}
         ${ownStyle}
        <style>
            #login{
                margin: 0;
                width: 470px;
                height: 434px;
                border: 1px solid black;
            }
        </style>

        <div id="login">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">รหัสสมาชิก :</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <p class="control">
                        <input class="input" type="username" value="" >
                    </p>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">รหัสผ่าน :</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <p class="control">
                        <input class="input" type="password" >
                    </p>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}
customElements.define("page-login", PageLogin);
