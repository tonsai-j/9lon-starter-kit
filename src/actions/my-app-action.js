export const UPDATE_PAGE = "UPDATE_PAGE";

export const navigate = location => dispatch => {
  console.log("location", location);

  var path = window.decodeURIComponent(location.pathname);
  // if (path !== '/') {
  //     path = path.replace('page-', '')
  //     path = '/page-' + path.replace('/', '')
  // }
  // console.log('path', path);
  var search = location.search.substring(1);
  var params = {};
  if (location.search != "") {
    params = JSON.parse(
      '{"' +
        decodeURI(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
  }
  let hash = location.hash;
  // Extract the page name from path.
  const page = path === "/" ? "page-dashboard" : path.slice(1);
  console.log("page", page);
  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page, params, hash));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  // dispatch(updateDrawerState(false));
};

<<<<<<< HEAD
const loadPage = (page, params) => async (dispatch) => {
    switch (page) {
        case 'page-dashboard':
            await import('../pages/page-dashboard/page-dashboard.js');
            // Put code here that you want it to run every time when
            // navigate to view1 page and my-view1.js is loaded
            break;
        case 'page-dashboard/page-side':
            // console.log(1111111);

            await import('../pages/page-dashboard/page-side.js');
            // Put code here that you want it to run every time when
            // navigate to view1 page and my-view1.js is loaded
            break;
        case 'page-exporter':
            await import('../pages/page-exporter/page-exporter.js');
            break;
        case 'page-form':
            await import('../pages/page-form/page-form.js');
            break;
        case 'page-list-file':
            await import('../pages/page-list-file/page-list-file.js');
            break;
        case 'page-register':
            await import('../pages/page-register/page-register.js');
            break;
        case 'page-renew':
            await import('../pages/page-renew/page-renew.js');
            break;
        default:
            page = 'page-404';
            await import('../pages/page-404/page-404.js');
    }
=======
const loadPage = (page, params, hash) => async dispatch => {
  switch (page) {
    case "page-dashboard":
      await import("../pages/page-dashboard/page-dashboard.js");
      // Put code here that you want it to run every time when
      // navigate to view1 page and my-view1.js is loaded
      break;
    case "page-dashboard/page-side":
      // console.log(1111111);
>>>>>>> 84e36243c5f98f1bed2c4060216973b93edd8660

      await import("../pages/page-dashboard/page-side.js");
      // Put code here that you want it to run every time when
      // navigate to view1 page and my-view1.js is loaded
      break;
    case "page-exporter":
      await import("../pages/page-exporter/page-exporter.js");
      break;
    case "page-form":
      await import("../pages/page-form/page-form.js");
      break;
    case "page-list-file":
      await import("../pages/page-list-file/page-list-file.js");
      break;

    default:
      page = "page-404";
      await import("../pages/page-404/page-404.js");
  }

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
