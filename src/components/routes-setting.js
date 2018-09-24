const ROUTERDEFAULT = "page-dashboard";
const RouterConfig = (store, navigate) => {
  // console.log(store, navigate);

  return [
    {
      path: "/",
      MyBreadcrumb: { title: "home", href: "/" },
      action: () => {
        store.dispatch(navigate("page-dashboard"));
      },
      component: "page-dashboard"
    },
    {
      path: "/exporter",
      MyBreadcrumb: { title: "Exporter", href: "/exporter" },
      action: () => {
        store.dispatch(navigate("page-exporter"));
      },
      component: "page-exporter"
    },
    {
      path: "/form",
      MyBreadcrumb: { title: "form", href: "/form" },
      action: () => {
        console.log('1',12121212);
        
        store.dispatch(navigate("page-form"));
      },
      component: "page-form"
    },
    {
      path: "/index-default",
      MyBreadcrumb: { title: "index-default", href: "/index-default" },
      action: () => {
        store.dispatch(navigate("page-index-default"));
      },
      component: "page-index-default"
    },
    {
      path: "/register",
      MyBreadcrumb: { title: "register", href: "/register" },
      action: () => {
        store.dispatch(navigate("page-register"));
      },
      component: "page-register"
    },
    {
      path: "/renew",
      MyBreadcrumb: { title: "renew", href: "/renew" },
      action: () => {
        store.dispatch(navigate("page-renew"));
      },
      component: "page-renew"
    },
    {
      path: "/search",
      MyBreadcrumb: { title: "search", href: "/search" },
      action:() => {
        store.dispatch(navigate("page-search"));
      },
      component: "page-search"
    },
    // {
    //   path: '/index',
    //     children: [
    //       // {
    //       //   path: '/x',
    //       //   action: store.dispatch(navigate("page-index")),
    //       //   component: 'page-index'
    //       // },
    //       {
    //         path: '/:user/:to',
    //         // action: store.dispatch(navigate("page-index")),
    //         action : (ctx)=>{
    //           console.log(ctx);

    //           store.dispatch(navigate("page-index"))
    //         },
    //         component: 'page-index'
    //       },
    //     ]
    //   },
    {
      path: "/login",
      MyBreadcrumb: { title: "login", href: "/login" },
      action: () => {
        store.dispatch(navigate("page-login"));
      },
      component: "page-login"
    },
    {
      path: "/index",
      MyBreadcrumb: { title: "หน้าทดสอบ", href: "/index" },
      action: ctx => {
        store.dispatch(navigate("page-index"));
      },
      component: "page-index"
    },
    {
      path: "/regist",
      MyBreadcrumb: { title: "regist", href: "/regist" },
      action: () => {
        store.dispatch(navigate("page-regist"));
      },
      component: "page-regist"
    },
    {
      path: "(.*)",
      action: ctx => store.dispatch(navigate("page-404")),
      component: "page-404"
    }
  ];
};
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
    case "page-regist":
      await import("../pages/page-regist/page-regist.js");
      break;
    case "page-search":
      await import("../pages/page-search/page-search.js");
      break;
    case "page-login":
      await import("../pages/page-login/page-login.js");
      break;
    default:
      await import("../pages/page-404/page-404.js");
  }
};

export { RouterConfig, RouterPage, ROUTERDEFAULT };
