import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
import '@polymer/iron-pages'


class PageSlide extends LitElement {
    static get properties() {
        return {
            name: Array
        };
    }
    constructor() {
        super()

    }
    render() {
        return html`
        <style>
            iron-pages {
                width: 100%;
                height: 600px;
                font-size: 50px;
                color: white;
                text-align: center;
            }
        
            iron-pages div {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        
            iron-pages div:nth-child(1) {
                background-image: url("http://www.gaebler.com/images/news/Ex-Im-Bank-Loans-for-Small-Business-Exporters.jpg");
            }
        
            iron-pages div:nth-child(2) {
                background-image: url("http://www.thaibizchina.com/upload/iblock/72f/03.13.jpg");
            }
        
            iron-pages div:nth-child(3) {
                background-image: url("https://static.vesselfinder.net/images/media/0bbfb3b0e9c0f2b2c10480b5c9cf7b6d.jpg");
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

    firstRendered() {
        var pages = this.shadowRoot.querySelector("iron-pages")

        console.log(pages)
        setInterval(function () { pages.selectNext(); }, 3000);
        // pages.addEventListener('click', function (e) {

        //     pages.selectNext();
        // });
    }
}

customElements.define('page-slide', PageSlide);