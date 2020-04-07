import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

window.getState = store.getState;

export default store;
