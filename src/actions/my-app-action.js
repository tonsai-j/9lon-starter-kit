import { RouterPage , ROUTERDEFAULT } from "../components/routes-setting";
export const UPDATE_PAGE = "UPDATE_PAGE";

export const navigate = location => dispatch => {
  // console.log("location", location);

  // var path = window.decodeURIComponent(location.pathname);
  // var search = location.search.substring(1);
  // var params = {};
  // if (location.search != "") {
  //   params = JSON.parse(
  //     '{"' +
  //       decodeURI(search)
  //         .replace(/"/g, '\\"')
  //         .replace(/&/g, '","')
  //         .replace(/=/g, '":"') +
  //       '"}'
  //   );
  // }
  // let hash = location.hash;
  // Extract the page name from path.
  var path = location;
  const page = path || ROUTERDEFAULT;
  let params, hash;
  dispatch(loadPage(page, params, hash));
};

const loadPage = (page, params, hash) => dispatch => {
  RouterPage(page);

  dispatch(updatePage(page, params, hash));
};

const updatePage = (page, params, hash) => {
  //   console.log("page, params", page, params, hash);

  return {
    type: UPDATE_PAGE,
    page,
    params,
    hash
  };
};
