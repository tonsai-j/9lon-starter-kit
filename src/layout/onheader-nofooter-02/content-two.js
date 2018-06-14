import { LitElement, html } from "@polymer/lit-element";
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import { FlexboxGridLit } from './../../style/flexbox-grid-lit';

import './header-two'
import './footer-two'
// {/* <header-two></header-two>
// <slot></slot>
// <footer-two></footer-two> */}
// ทำ header footer fix
// https://stackoverflow.com/questions/7123138/how-to-make-this-header-content-footer-layout-using-css
// แก้ปัญหา ด้วย flex
// https://philipwalton.github.io/solved-by-flexbox/
// เหตุผลที่ต้องเขียนแบบนี้
// https://stackoverflow.com/questions/42719457/polymer-app-header-not-working-as-intended-without-app-header-layout
class contentTwo extends LitElement {
    _render() {
        return html`
         ${FlexboxGridLit}
        <style>
            app-header {
                position: fixed;
                background-color: #FFF;
                color: blue;
                top: 0;
                left: 0;
                width: 100%;
            }
        
            app-header paper-icon-button {
                --paper-icon-button-ink-color: white;
            }
        
            div.toolbar {
                height: 64px;
                padding: 0px 16px;
            }
        
            div#content {
                padding-top: 74px;
                background-color: #EEE;
            }
        
            .wrapper {
                height: 100vh;
                display: flex;
        
                /* Direction of the items, can be row or column */
                flex-direction: column;
            }
        
            footer {
                height: 100px;
                background-color: #FFF;
                color: blue;
                width: 100%;
                flex: none;
            }
        
            main {
                flex: 1;
            }
        </style>
        <div class="wrapper">
            <header>
                <app-header fixed condenses effects="waterfall" shadow>
                    <div class="row toolbar">
                        <div class="col-xs-9">
                            <div class="box">offset</div>
                            <nav>
                                <a href="/html/">HTML</a> |
                                <a href="/css/">CSS</a> |
                                <a href="/js/">JavaScript</a> |
                                <a href="/jquery/">jQuery</a>
                            </nav>
                        </div>
                    </div>
                </app-header>
            </header>
            <main>
                <div id="content">
                    <slot name="content"></slot>
                </div>
            </main>
            <footer>
                <footer-two></footer-two>
            </footer>
        </div>
        `
    }
}
customElements.define('content-two', contentTwo)