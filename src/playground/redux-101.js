import { createStore } from 'redux'

const store = createStore((state = { count: 0 }, action) => {
  const { incrementBy = 1, decrementBy = 1, count = state.count } = action
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + incrementBy }
    case 'DECREMENT':
      return { count: state.count - decrementBy }
    case 'SET':
      return { count }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
})

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
})

store.dispatch({
  type: 'DECREMENT'
})

store.dispatch({
  type: 'SET',
  count: 101
})

unsubscribe()
