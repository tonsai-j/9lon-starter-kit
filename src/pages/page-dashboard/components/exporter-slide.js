import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
import '@polymer/iron-pages'


class ExporterSlide extends LitElement {
    static get properties() {
        return {
            name: Array
        };
    }
    constructor() {
        super()

    }
    _render({ name }) {
        return html`
        <style>
            input {
                width: 100%;
                box-sizing: border-box;
                font-size: 1.5em;
            }
        
            iron-pages {
                width: 100%;
                height: 500px;
                font-size: 3em;
                color: white;
                text-align: center;
            }
        
            iron-pages div {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 4px;
                box-sizing: border-box;
            }
        
           
        
            iron-pages div:nth-child(1) {
                background-color: var(--google-blue-500);
            }
        
            iron-pages div:nth-child(2) {
                background-color: #00BFFF;
            }
        
            iron-pages div:nth-child(3) {
                background-color: #87CEEB;
            }
        </style>
        
        
        <paper-material elevation="2">
            <!-- <br> -->
            <iron-pages selected="0">
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </iron-pages>
            <!-- <br> -->
        </paper-material>


        `;
    }

    _firstRendered() {
        var pages = this.shadowRoot.querySelector("iron-pages")

        console.log(pages)
        setInterval(function () { pages.selectNext(); }, 3000);
        // pages.addEventListener('click', function (e) {

        //     pages.selectNext();
        // });
    }
}

customElements.define('exporter-slide', ExporterSlide);