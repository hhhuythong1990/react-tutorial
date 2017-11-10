import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);

console.log('default', store.getState());

//Action thay doi status

store.dispatch(status());
console.log('toggle_status', store.getState());

//Action sort name -> Z-A
const param = {
    by: 'name',
    value: -1
}

store.dispatch(sort(param));

console.log('sort', store.getState());