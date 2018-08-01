import { UPDATE_PAGE } from '../actions/my-app-action.js';

const app = (state =
    {
        page: "page-dashboard",
        params: {}
    }, action) => {
    switch (action.type) {
        case UPDATE_PAGE:
        console.log('action',action);
        
            return {
                ...state,
                page: action.page,
                params: action.params,
                hash: action.hash
            };
        default:
            return state;
    }
}

export default app;