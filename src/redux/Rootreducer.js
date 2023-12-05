import {combineReducers} from 'redux';
import {Reducers} from './Reducer';
const rootreducer = combineReducers({
  user: Reducers,
});

export default rootreducer;
