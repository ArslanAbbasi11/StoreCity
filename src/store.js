import {createStore, applyMiddleware,compose} from 'redux'
import reducers from "./Redux/Reducers";
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

export default myStore;