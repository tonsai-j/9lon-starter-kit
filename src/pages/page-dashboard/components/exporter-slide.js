import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
import '@polymer/iron-pages'
import '@polymer/paper-icon-button'
// //import "@polymer/iron-icons/iron-icons";
import bulmaStyles from '../../../style/bulma-styles'
import { FlexboxGridLit, FlexboxGridRemovePadding } from '../../../style/flexbox-grid-lit';

class ExporterSlide extends LitElement {
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
         ${bulmaStyles(this)} ${FlexboxGridLit} ${FlexboxGridRemovePadding}
        <style>
            input {
                width: 100%;
                box-sizing: border-box;
                font-size: 1.5em;
            }
        
            iron-pages {
                width: 100%;
                height: 600px;
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
                background-image: url("https://money2know.com/wp-content/uploads/2018/01/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%AD%E0%B8%AD%E0%B8%8160.jpg");
            }
        
            iron-pages div:nth-child(2) {
                background-image: url("http://media.komchadluek.net/img/size1/2016/09/01/kb8ehabckkj67f9hac9db.jpg");
            }
        
            iron-pages div:nth-child(3) {
                background-image: url("http://www.thairiceforlife.com/images/certification/quality-hommali.jpg");
            }
        
            #pager {
                position: relative;
                margin: auto;
            }
        
            .prev,
            .next {
                position: absolute;
                top: 45%;
            }
        
            .next {
                right: 0;
                border-radius: 3px 0 0 3px;
            }
        
            .prev:hover,
            .next:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }
        </style>
        <paper-material elevation="2">
            <div id="pager">
                <iron-pages selected="0">
                    <div class="page">
                        
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </iron-pages>
                <div>
                    <paper-icon-button class="prev" noink icon="chevron-left" on-click="" style="width:60px;height:60px"></paper-icon-button>
                    <paper-icon-button class="next" noink icon="chevron-right" on-click="" style="width:60px;height:60px"></paper-icon-button>
                </div>
        
            </div>
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

customElements.define('exporter-slide', ExporterSlide);