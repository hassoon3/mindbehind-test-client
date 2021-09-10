import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { CommentReducer } from './features/comment'
import { CounterReducer } from './features/counter'
import { AlertReducer } from './features/alert'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  comment: CommentReducer,
  count: CounterReducer,
  alert: AlertReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
