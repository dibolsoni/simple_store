import { legacy_createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'

import shoppingReducer from './shopping/reducer'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default legacy_createStore(
    shoppingReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(saga)

