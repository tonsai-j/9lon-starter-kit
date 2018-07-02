import { LitElement, html } from '@polymer/lit-element';
// import { PageViewElement } from './../../../components/page-view-element';
import '@polymer/paper-material'
import '@polymer/paper-button'
import bulmaStyles from '../../../style/bulma-styles'
import '@polymer/iron-pages'

class ExporterCard extends LitElement {
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
         ${bulmaStyles()}
        <style>
        </style>
        
        
        <paper-material elevation="2">
            <br>
            <h1 style="text-align:center">รู้จักเราให้มากขึ้น
            </h1>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>
        
                            <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                <a>@bulmaio</a>.
                                <a href="#">#css</a>
                                <a href="#">#responsive</a>
                                <br>
                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">2</div>
                <div class="column">3</div>
            </div>
        </paper-material>


        `;
    }

}

customElements.define('exporter-card', ExporterCard);