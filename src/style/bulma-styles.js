import { html } from "@polymer/lit-element";
export default (that)=> {
    return  html`
    ${console.log(that.baseURI)}
    <link rel="stylesheet" href$="${that.baseURI}/style/bulma-new-style/bulma.min.css">
    <!-- <link rel="stylesheet" href="../../node_modules/@fortawesome/fontawesome-free/css/all.css" > -->
    `
}
;