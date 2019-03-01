import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 }) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 }) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET',
  count: 0
})

const setCount = ({ count = 0 }) => ({
  type: 'SET',
  count
})

const countReducer = (state = { count: 0 }, action) => {
  const { count = state.count } = action
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy }
    case 'DECREMENT':
      return { count: state.count - action.decrementBy }
    case 'SET':
      return { count }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 67 }))
store.dispatch(decrementCount({ decrementBy: 23 }))
store.dispatch(resetCount())
store.dispatch(setCount({ count: 21 }))

unsubscribe()
