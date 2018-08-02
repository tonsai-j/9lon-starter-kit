import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
import ownStyle from "../../style/own-style";
class PageLogin extends LitElement {
  _render() {
    return html`
    ${bulmaStyles()}
         ${ownStyle}
        <style>
            #main {
                margin: 8% 0%;
            }
            .is-half{
                /* border: 1px solid black; */
                border-radius: 5px;
            }
        </style>
        <div id="main">
            <div class="columns is-centered is-gapless">
                <div class="column is-half">
                    <div class="columns">
                        <div class="column">
                            <div class="title-body">เข้าสู่ระบบ</div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column field-label is-3 ">
                            <label class="label">รหัสสมาชิก :</label>
                        </div>
                        <div class="column field-body is-7">
                            <input class="input" type="text" placeholder="รหัสสมาชิก">
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column field-label is-3 ">
                            <label class="label">รหัสผ่าน :</label>
                        </div>
                        <div class="column field-body is-7">
                            <input class="input" type="password" placeholder="รหัสผ่าน">
                        </div>
                    </div>
                    <div class="field is-grouped is-grouped-centered">
                        <p class="control">
                            <button class="button is-primary">
                            เข้าสู่ระบบ
                            </button>
                        </p>
                        <p class="control">
                            <button class="button is-light">
                            ยกเลิก
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        `;
  }
}
customElements.define("page-login", PageLogin);
