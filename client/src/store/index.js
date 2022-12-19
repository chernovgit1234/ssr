import { createStore } from 'vuex'

import initModuleProducts from './products';

export default function initNewStore(api){
  let products = initModuleProducts(api.products);

  let store = createStore({
    modules: {
      products
    },
    strict: process.env.NODE_ENV !== 'production'
  });

  return store;
}

