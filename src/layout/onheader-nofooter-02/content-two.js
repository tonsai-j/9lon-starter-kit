import { LitElement, html } from "@polymer/lit-element";
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './header-two'
import './footer-two'
// {/* <header-two></header-two>
// <slot></slot>
// <footer-two></footer-two> */}
// เหตุผลที่ต้องเขียนแบบนี้
// https://stackoverflow.com/questions/42719457/polymer-app-header-not-working-as-intended-without-app-header-layout
class contentTwo extends LitElement {
    _render() {
        return html`
        <style is="custom-style">
            app-header {
                position: fixed;
                background-color: #4285f4;
                color: #fff;
                top: 0;
                left: 0;
                width: 100%;
            }
        
            app-header paper-icon-button {
                --paper-icon-button-ink-color: white;
            }
        
            div#content {
                padding-top: 74px;
            }
        </style>
        <app-header fixed condenses effects="waterfall" shadow>
            <app-toolbar>
                <div main-title>App name 123123</div>
            </app-toolbar>
        </app-header>
        <div id="content">
            <slot name="content"></slot>
        </div>
        `
    }
}
customElements.define('content-two', contentTwo)