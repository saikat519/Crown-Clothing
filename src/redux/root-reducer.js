import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']     //we want to store only cart into local storage bcz user is already handled by firebase
  };
  
  const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
  });
  
export default persistReducer(persistConfig, rootReducer);