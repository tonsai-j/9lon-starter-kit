import { html ,LitElement} from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
import "./components/exporter-renew";

class PageRenew extends LitElement {
  render() {
    return html`
             ${bulmaStyles(this)}
            
            ลานา
        `;
  }
  onAfterEnter(context) {
    console.log(context);

  }
}

customElements.define("page-renew", PageRenew);
