import { createStore } from 'redux';

import reducer from './modules/example/reducer';

const store = createStore(reducer);

export default store;
