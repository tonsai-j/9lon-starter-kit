import { LitElement, html } from "@polymer/lit-element";
import "@polymer/app-layout/app-header/app-header";
import "@polymer/app-layout/app-toolbar/app-toolbar";

import bulmaStyles from "../../style/bulma-styles";

import "./header-two";
import "./footer-two";
import "./nav-two";
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
      
        <style>
           
        </style>
        <!-- <link rel="stylesheet" href="../../../style/reset.css"> -->
        <!-- <link rel="stylesheet" href="../../../style/bulma.css"> -->
        ${bulmaStyles()}
        <div class="wrapper">
            <header>
                <!-- <app-header condenses effects="waterfall" > -->
                            <header-two></header-two>
                <!-- </app-header> -->
            </header>
            <main>
                <div id="content" class="row container">
                    <div class="columns">
                        <div class="column is-one-quarter">
                            <nav-two></nav-two>
                        </div>
                        <div class="column">
                            <slot name="content"></slot>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <footer-two></footer-two>
            </footer>
        </div>
        `;
  }
}
customElements.define("content-two", contentTwo);
