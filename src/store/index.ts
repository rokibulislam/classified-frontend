import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'

export const initStore = (initialState, options) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk))
}

const logger = createLogger()
// const middleware = [thunk, logger]
const middleware = [thunk]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
  // compose(
  //     applyMiddleware(thunk)
  // )
)