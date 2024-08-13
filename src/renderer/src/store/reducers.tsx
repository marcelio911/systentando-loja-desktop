import { combineReducers } from 'redux'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

import cartReducer from '@renderer/store/slices/cartSlice'
import loadingReducer from '@renderer/store/slices/loadingSlice'
import productsReducer from '@renderer/store/slices/productsSlice'

const rootPersistConfig = {
  timeout: 0,
  key: 'root',
  storage,
  autoMergeLevel2,
  whitelist: ['toast', 'loading', 'cart', 'products'],
  // blacklist: [],
}

const rootReducer = combineReducers({
  // toast: toastReducer,
  loading: loadingReducer,
  cartState: cartReducer,
  productsState: productsReducer,
})

export default { rootReducer, rootPersistConfig }
