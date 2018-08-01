import { html ,LitElement} from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
import "./components/exporter-renew";

class PageRenew extends LitElement {
  _render() {
    return html`
             ${bulmaStyles()}
            
            ลานา
        `;
  }
  onAfterEnter(context) {
    console.log(context);

  }
}

customElements.define("page-renew", PageRenew);
