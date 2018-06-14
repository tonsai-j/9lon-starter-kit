import { LitElement, html } from '@polymer/lit-element';

class myAppTest extends LitElement {

    static get properties() { return { mood: String } }

    _render({ mood }) {
        return html`<style>
    .mood {
        color: green;
    }
</style>
<div class="field">
    <div class="control">
        <input class="input is-primary" type="text" placeholder="Primary input">
    </div>
</div>
Web Components are
<span class="mood">${mood}</span>!`;
    }

}

customElements.define('my-app-test', myAppTest);