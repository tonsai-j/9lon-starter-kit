import { LitElement, html } from "@polymer/lit-element";
// import '@polymer/app-layout/app-header/app-header'
// import '@polymer/app-layout/app-toolbar/app-toolbar'

// import '@polymer/app-layout/app-drawer-layout/app-drawer-layout'
// import '@polymer/app-layout/app-drawer/app-drawer'

// import { FlexboxGridLit, FlexboxGridRemovePadding } from './../../style/flexbox-grid-lit';

// ${FlexboxGridLit} ${FlexboxGridRemovePadding}
import './header-three'
import './nav-three'
// {/* <header-two></header-two>
// <slot></slot>
// <footer-two></footer-two> */}
// ทำ header footer fix
// https://stackoverflow.com/questions/7123138/how-to-make-this-header-content-footer-layout-using-css
// แก้ปัญหา ด้วย flex
// https://philipwalton.github.io/solved-by-flexbox/
// เหตุผลที่ต้องเขียนแบบนี้
// https://stackoverflow.com/questions/42719457/polymer-app-header-not-working-as-intended-without-app-header-layout
class contentThree extends LitElement {
    _render() {
        return html`
      
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
        
            main {
                flex: 1;
            }
        
            header {
                z-index: 1
            }
        
            html {
                --app-drawer-width: 350px;
            }
        
            body {
                margin: 0;
                font-family: 'Roboto', 'Noto', sans-serif;
                background-color: #eee;
            }
        
            app-toolbar {
                background-color: #4285f4;
                color: #fff;
            }
        
            app-drawer-layout:not([narrow]) [drawer-toggle] {
                display: none;
            }
        
            app-drawer {
                --app-drawer-content-container: {
                    background-color: #B0BEC5;
                }
            }
        </style>
        
        <!-- <app-drawer-layout>
        
            <app-drawer slot="drawer">
                <nav-three></nav-three>
            </app-drawer>
        
            <app-header fixed condenses effects="waterfall">
                <div class="row toolbar">
                    <div class="col-xs-12">
                        121212
                        <header-three></header-three>
                    </div>
                </div>
            </app-header> -->
        
            <slot name="content"></slot>
        
        <!-- </app-drawer-layout> -->

     
        `
    }
}
customElements.define('content-three', contentThree)


// {/*
//  <div class="wrapper">
// <header>
//     <app-header fixed condenses effects="waterfall">
//         <div class="row toolbar">
//             <div class="col-xs-12">
//                 <header-three></header-three>
//             </div>
//         </div>
//     </app-header>
// </header>
// <main>
//     <div id="content" class="row">
//         <div class="col-xs-2">
//             <nav-three></nav-three>
//         </div>
//         <div class="col-xs-10">
//             <slot name="content"></slot>
//         </div>
//     </div>
// </main>
// </div> 
// */}