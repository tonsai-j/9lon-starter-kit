import { LitElement, html } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin.js";
import { installRouter } from "pwa-helpers/router.js";
import { updateMetadata } from "pwa-helpers/metadata.js";
import { store } from "./store/store.js";
import { navigate } from "./actions/my-app-action.js";
// เอาข้อมูลจาก tag form  เอาข้อมูลกับมาเป้น object
// http://jsfiddle.net/g7zp5sbL/1/
// สอนการใช้ slot
// https://www.youtube.com/watch?v=easo9fuIQuM
import BulmaStyle from "./style/bulma-styles";
import "./my-routes.js";
class MyApp extends connect(store)(LitElement) {
  static get properties() {
    return {
      _page: String,
      appTitle: String
    };
  }
  constructor() {
    super();
    this.appTitle = "ระบบพื้นฐาน";
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    //  setPassiveTouchGestures(true);
  }

  _render({ _page, appTitle }) {
    return html`
    ${BulmaStyle()}
        <!-- <link rel="stylesheet" href="../../../style/"> -->
    <!-- <link rel="stylesheet" href="../style/reset.css"> -->
            <my-routes page="${_page}"></my-routes>
        <a id="link" href="/" style="display:none;"></a>
        `;
  }
  // ทำงานครั้งแรก
  _firstRendered() {
    this.addEventListener("change-page", e => {
      var link = this.shadowRoot.querySelector("#link");
      let path = e.detail.path;
      let params = this.genParams(e.detail.params);
      // เช็คว่ามีพารามไหม ถ้ามีก็เพิ่มเข้าไป
      if (params) {
        path = path + "?" + params;
      }
      link.setAttribute("href", path);
      link.click();
    });
    // console.log("_firstRender", window.decodeURIComponent(location.pathname), window.location.search.substr(1))

    window.params = this._findGetParameter(window.location.search);
    installRouter(location => store.dispatch(navigate(location)));
  }
  _didRender(properties, changeList) {
    // console.log("changeList", changeList, properties)
    if ("_page" in changeList) {
      const pageTitle = properties.appTitle + " - " + changeList._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }
  _stateChanged(state) {
    // console.log('_stateChanged');
    if (state.myAppReducer.page !== this._page) {
      this._page = state.myAppReducer.page;
    }
    // console.log(state);
  }
  //  ฟั่งฟั่งต่างๆ
  // เอาพาราม
  _findGetParameter(parameterName) {
    if (parameterName !== "") {
      var result = [];
      var tmp = [];
      var items = parameterName.split("&");
      for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        // if (tmp[0] === parameterName) result = window.decodeURIComponent(tmp[1]);
        result.push(tmp);
      }
      return result;
    } else {
      return null;
    }
  }
  genParams(params) {
    if (!params) return "";
    let data = new String();
    let url_length = Object.getOwnPropertyNames(params).length;
    let count = new Number();
    // //console.log(url);
    for (var variable in params) {
      if (params[variable] != "") {
        data = data + variable + "=" + params[variable];
        count < url_length - 1 ? (data += "&") : "";
      }
      count++;
    }
    return data;
  }
}
customElements.define("my-app", MyApp);
