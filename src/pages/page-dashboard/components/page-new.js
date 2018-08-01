import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
// import '@polymer/paper-card'


class PageNew extends LitElement {
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
            .column1_div {
                position: relative;
                float: left;
                width: 33%;
                background-color: #FC6;
            }
        
            .column2_div {
                position: relative;
                float: left;
                width: 33%;
                margin: 0px 0.5%;
                background-color: #C96;
            }
        
            .column3_div {
                position: relative;
                float: right;
                width: 33%;
                background-color: #69F;
            }
        </style>
        
        
        <paper-material elevation="2">
            <!-- <br> -->
            <h1 style="text-align:center">รู้จักเราให้มากขึ้น</h1>
            <!-- <paper-card heading="Emmental" image="http://placehold.it/350x150/FFC107/000000" alt="Emmental">
                                        <div class="card-content">
                                            Emmentaler or Emmental is a yellow, medium-hard cheese that originated in the area around Emmental, Switzerland. It is one
                                            of the cheeses of Switzerland, and is sometimes known as Swiss cheese.
                                        </div>
                                        <div class="card-actions">
                                            <paper-button>Share</paper-button>
                                            <paper-button>Explore!</paper-button>
                                        </div>
                                    </paper-card> -->
            <div style="margin:auto;width:75%;background-color:#FCC;">
                <div class="column1_div">&nbsp;
                    <paper-card heading="Emmental" image="http://placehold.it/350x150/FFC107/000000" alt="Emmental">
                        <div class="card-content">
                            1111
                        </div>
                        <div class="card-actions">
                            <paper-button>Share</paper-button>
                            <paper-button>Explore!</paper-button>
                        </div>
                    </paper-card>
                </div>
                <div class="column2_div">&nbsp;</div>
                <div class="column3_div">&nbsp;</div>
            </div>
            <br>
        </paper-material>


        `;
    }


}

customElements.define('page-new', PageNew);