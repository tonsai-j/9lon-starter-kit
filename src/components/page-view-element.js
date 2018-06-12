import { LitElement } from '@polymer/lit-element';
import { store } from '../store/store'

export class PageViewElement extends LitElement {

  _shouldRender(props, changedProps, old) {

    if (props.active) {
      this._pageActive(store.getState().myAppReducer.params)
    }

    return props.active;
  }

  _redirect(href, nextParams) {
    this.dispatchEvent(new CustomEvent('change-page', {
      bubbles: true, composed: true, detail: { path: href, params: nextParams }
    }));
  }

  static get properties() {
    return {
      active: Boolean
    }
  }

}