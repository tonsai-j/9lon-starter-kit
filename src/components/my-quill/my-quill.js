import { html, LitElement } from "@polymer/lit-element";
import bulmaStyles from "../../style/bulma-styles";
// import Quill from 'quill/dist/quill.min.js'
// import Quill from 'quill/quill.js'
class MyQuill extends LitElement {
  static get properties() {
    return {
      quill: Object,
      value: Object
    };
  }
  constructor() {
    super();
    this.quill = {};
    this.value = {
      delta: "",
      text: "",
      justHtml: ""
    };
  }
  _render() {
    return html`
        <link rel="stylesheet" href="../../../node_modules/quill/dist/quill.snow.css">
        <!-- Create the editor container -->
        <div id="editor">
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br></p>
        </div>

    
        `;
  }
  _firstRendered() {
    let element = this.shadowRoot.querySelector("#editor");
    // console.log(document.body);
    // console.log(this.shadowRoot);
    var quill = new Quill(element, {
        // bounds: this.shadowRoot,
      theme: "snow"
    });
    // let contents = {
    //   ops: [
    //     { insert: "Hello World!\nSome initial " },
    //     { attributes: { bold: true }, insert: "bold" },
    //     { insert: " text\nไม่มีอะไรนะปกติ\n\n\nอะไรอีก\n\n" }
    //   ]
    // };

    // var quill = new Quill(element, {
    //   placeholder: "Waiting for your precious content",
    //   theme: "snow"
    // });

    // this.quill = quill;
    let _this = this;
    // quill.setContents(contents.ops);
    quill.on("text-change", function(deltas, oldDelta, source) {
        var delta = quill.getContents();
        var text = quill.getText();
        var justHtml = quill.root.innerHTML;
      //   console.log("delta=>", delta);
      //   console.log("oldDelta=>", oldDelta);
      //   console.log("source=>", source);
      // console.log("quill=>", JSON.stringify(quill.getContents()));

        // console.log("text=>", text);
        // console.log("justHtml=>", justHtml);
        _this.value = {
          delta: delta,
          text: text,
          justHtml: justHtml
        };
        _this.dispatchEvent(
          new CustomEvent("value-changed", {
            bubbles: true,
            composed: true,
            detail: { value: _this.value }
          })
        );
      // preciousContent.innerHTML = JSON.stringify(delta);
      // justTextContent.innerHTML = text;
      // justHtmlContent.innerHTML = justHtml;
    });
  }
}
customElements.define("my-quill", MyQuill);
