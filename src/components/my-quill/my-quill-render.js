import {
    LitElement,
    html
} from "@polymer/lit-element";
// import { unsafeHTML } from 'lit-html/lib/unsafe-html';
class MyQuillRender extends LitElement {
    static get properties() {
        return {
            data: {},
            dataType: {},
            element: {}
        };
    }
    constructor() {
        super()
        this.data = ''
        this.dataType = 'delta'
        this.element = {}
        // dataType
        // 1 delta
        // 2 justHtml
        // 3 text
    }
    render() {
        return html `
        <div id="content">
        <div>
        `
    }
    firstUpdated(){
        this.element = this.shadowRoot.querySelector("#content");
    // console.log(this.element)
    }
    shouldUpdate(changedProperties){
        let element = this.element
        // console.log(element)
        if(element){
            element.innerHTML = this.data.justHtml || ''
            return true
        } else {
            element.innerHTML = ''
            return false
        }
    }
    // _shouldRender(props, changedProps, prevProps) {
    //     // console.log(props, changedProps, prevProps);
    //     let element = this.shadowRoot.querySelector("#content");
    //     // console.log(element);
    //     // console.log(changedProps.data.justHtml);
    //     if (element) {
    //         element.innerHTML = changedProps.data.justHtml
    //     }
        
    //     return true
    // }
}
customElements.define("my-quill-render", MyQuillRender);