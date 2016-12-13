// reducers的职责是根据不同的actions更新state
import {handleActions} from 'redux-actions';
import CounterState from '../consts/models';
import {INCREMENT_COUNT, DECREMENT_COUNT} from '../consts/actionTypes';

const counterReducers = handleActions({
    INCREMENT_COUNT: state => (state.set('count', state.get('count') + 1)),
    DECREMENT_COUNT: state => (state.set('count', state.get('count') - 1))
}, CounterState);

export default counterReducers;
