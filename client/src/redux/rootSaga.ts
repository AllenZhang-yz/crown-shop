import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shopSagas';
import { userSagas } from './user/userSaga';
import { cartSagas } from './cart/cartSaga';

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
