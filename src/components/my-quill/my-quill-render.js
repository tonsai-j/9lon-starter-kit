import {
    LitElement,
    html
} from "@polymer/lit-element";
class MyQuillRender extends LitElement {
    static get properties() {
        return {
            data: String,
            dataType: String
        };
    }
    constructor() {
        super()
        this.data = ''
        this.dataType = 'delta'
        // dataType
        // 1 delta
        // 2 justHtml
        // 3 text
    }
    _render({}) {
        return html `99999
        <div id="content"><div>
        `
    }
    _shouldRender(props, changedProps, prevProps) {
        console.log(props, changedProps, prevProps);
        let element = this.shadowRoot.querySelector("#content");
        // console.log(element);
        // console.log(changedProps.data.justHtml);
        if (element) {
            element.innerHTML = changedProps.data.justHtml
        }
        
        return true
        // render([
        //     {
        //         "attributes": {
        //             "bold": true
        //         },
        //         "insert": "Hi mom"
        //     }
        // ]);
        // if ("disablednylon" in changedProps) {
        //   // console.log(props, changedProps, prevProps);
        //   this._setRenderRadio();
        //   return true;
        // } else {
        //   return false;
        // }
    }
}
customElements.define("my-quill-render", MyQuillRender);