import {
  html,
  LitElement
} from "@polymer/lit-element";
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
    return html `
        <link rel="stylesheet" href$="${this.baseURI}node_modules/quill/dist/quill.snow.css">
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

    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{
        'header': 1
      }, {
        'header': 2
      }], // custom button values
      [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }],
      [{
        'script': 'sub'
      }, {
        'script': 'super'
      }], // superscript/subscript
      [{
        'indent': '-1'
      }, {
        'indent': '+1'
      }], // outdent/indent
      [{
        'direction': 'rtl'
      }], // text direction

      [{
        'size': ['small', false, 'large', 'huge']
      }], // custom dropdown
      [{
        'header': [1, 2, 3, 4, 5, 6, false]
      }],
      ['link', 'image', 'video', 'formula'], // add's image support
      [{
        'color': []
      }, {
        'background': []
      }], // dropdown with defaults from theme
      [{
        'font': []
      }],
      [{
        'align': []
      }],

      ['clean'] // remove formatting button
    ];
    var quill = new Quill(element, {
      // bounds: this.shadowRoot,
      theme: "snow",
      placeholder: "Waiting for your precious content",
      modules: {
        toolbar: toolbarOptions
      },
    });

    // this.quill = quill;
    let _this = this;
    // quill.setContents(contents.ops);
    quill.on("text-change", function (deltas, oldDelta, source) {
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
          detail: {
            value: _this.value
          }
        })
      );
      // preciousContent.innerHTML = JSON.stringify(delta);
      // justTextContent.innerHTML = text;
      // justHtmlContent.innerHTML = justHtml;
    });
  }
}
customElements.define("my-quill", MyQuill);