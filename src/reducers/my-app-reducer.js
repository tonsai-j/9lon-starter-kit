import { UPDATE_PAGE } from '../actions/my-app-action.js';
import { ROUTERDEFAULT } from '../components/routes-setting'
const app = (state =
    {
        page: ROUTERDEFAULT,
        params: {}
    }, action) => {
    switch (action.type) {
        case UPDATE_PAGE:
        
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