import { html,LitElement } from '@polymer/lit-element';
// import { PageViewElement } from './../../components/page-view-element.js';
import bulmaStyles from '../../style/bulma-styles'

class ExporterProfile extends LitElement {
    _render() {
        return html`
             ${bulmaStyles()}
             
             
        <div class="tabs is-boxed">
        <ul>
            <li class="is-active">
            <a>
                <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                <span>Pictures</span>
            </a>
            </li>
            <li>
            <a>
                <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                <span>Music</span>
            </a>
            </li>
            <li>
            <a>
                <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                <span>Videos</span>
            </a>
            </li>
            <li>
            <a>
                <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                <span>Documents</span>
            </a>
            </li>
        </ul>
        </div>

        `;
    }

  

}

customElements.define('exporter-profile', ExporterProfile);