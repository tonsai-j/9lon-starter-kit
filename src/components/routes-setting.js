const ROUTERDEFAULT = "page-dashboard";
const RouterConfig = (store, navigate) => [
  {
    path: "/",
    action: store.dispatch(navigate("page-dashboard")),
    component: "page-dashboard"
  },
  { path: "/two", component: "my-two" },
  { path: "/three", component: "my-three" },
  {
    path: "/renew",
    action: ctx => store.dispatch(navigate("page-renew")),
    component: "page-renew"
  }
];

const RouterPage = async page => {
  // console.log(page);
  // console.log(__dirname);

  switch (page) {
    case "page-dashboard":
      await import("../pages/page-dashboard/page-dashboard.js");
      // Put code here that you want it to run every time when
      // navigate to view1 page and my-view1.js is loaded
      break;
    case "page-dashboard/page-side":
      await import("../pages/page-dashboard/page-side.js");
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
    case "page-register":
      await import("../pages/page-register/page-register.js");
      break;
    case "page-renew":
      await import("../pages/page-renew/page-renew.js");
      break;
    case "page-index":
      await import("../pages/page-index/page-index.js");
      break;
    case "page-index-default":
      await import("../pages/page-index-default/page-index-default.js");
      break;
    default:
      //   page = "page-404";
      await import("../pages/page-404/page-404.js");
  }
};

export { RouterConfig, RouterPage, ROUTERDEFAULT };
