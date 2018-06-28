export const UPDATE_PAGE = 'UPDATE_PAGE';

export const navigate = (location) => (dispatch) => {
    // console.log(location.pathname);

    var path = window.decodeURIComponent(location.pathname)
    // if (path !== '/') {
    //     path = path.replace('page-', '')
    //     path = '/page-' + path.replace('/', '')
    // }
    // console.log('path', path);
    var search = location.search.substring(1);
    var params = {}
    if (location.search != "") {
        params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    }

    // Extract the page name from path.
    const page = path === '/' ? 'page-dashboard' : path.slice(1);

    // Any other info you might want to extract from the path (like page type),
    // you can do here
    dispatch(loadPage(page, params));

    // Close the drawer - in case the *path* change came from a link in the drawer.
    // dispatch(updateDrawerState(false));
};

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
            
        default:
            page = 'page-404';
            await import('../pages/page-404/page-404.js');
    }

    dispatch(updatePage(page, params));
}

const updatePage = (page, params) => {
    // console.log('page, params', page, params);

    return {
        type: UPDATE_PAGE,
        page,
        params
    };
}


