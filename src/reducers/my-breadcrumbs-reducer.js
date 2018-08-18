import { MY_BREADCRUMB_PUSH } from "../actions/my-breadcrumbs-action";

let initState = {
  myBreadcrumbs: []
};

let myBreadcrumbsReducer = (state = initState, action) => {
  // console.log("action=>", action);
  switch (action.type) {
    case MY_BREADCRUMB_PUSH:
      return Object.assign({}, state, { myBreadcrumbs: action.payload });
    default:
      return state;
  }
};

export default myBreadcrumbsReducer;
