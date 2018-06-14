import { LitElement } from '@polymer/lit-element';
import { store } from '../store/store'

export class PageViewElement extends LitElement {
  static get properties() {
    return {
      active: Boolean
    }
  }
  _shouldRender(props, changedProps, old) {
    if ('active' in props) {
      console.log('props',props);
      
      if (props.active) {
        // console.log(props, changedProps, old);

        this._pageActive(store.getState().myAppReducer.params)
      }

      return props.active;
    }

  }

  _redirect(href, nextParams) {
    this.dispatchEvent(new CustomEvent('change-page', {
      bubbles: true, composed: true, detail: { path: href, params: nextParams }
    }));
  }



}