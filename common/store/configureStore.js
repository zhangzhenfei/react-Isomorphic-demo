import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import countReducers from '../reducers/counterReducers';


// 使用createStore来创建我们的store，由于这里store需要在client-side和server-side使用，所以把它输出成function方便传入initialState使用

const configureStore = preloadedState => (
    createStore(
        countReducers,
        preloadedState,
        applyMiddleware(createLogger({ stateTransformer: state => state.toJS() }), thunk)
    )
);
export default configureStore;

