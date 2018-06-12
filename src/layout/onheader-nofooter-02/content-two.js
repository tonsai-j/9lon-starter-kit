import { LitElement, html } from "@polymer/lit-element";
import '@polymer/app-layout/app-header-layout/app-header-layout'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './header-two'
import './footer-two'
// {/* <header-two></header-two>
// <slot></slot>
// <footer-two></footer-two> */}
class contentTwo extends LitElement {
    _render() {
        return html`
        <style is="custom-style">
            app-header {
                background-color: #4285f4;
                color: #fff;
            }
        
            app-header paper-icon-button {
                --paper-icon-button-ink-color: white;
            }
        </style>
        <app-header-layout>
            <app-header slot="header" fixed condenses effects="waterfall">
                <app-toolbar>
                    <div main-title>App name</div>
                </app-toolbar>
            </app-header>
            <div>
                main content
            </div>
        </app-header-layout>
        `
    }
}
customElements.define('content-two', contentTwo)