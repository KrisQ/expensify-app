import { createStore, combimeReducers } from 'redux'

const demoState = {
  expenses: [
    {
      id: 'poikajdad',
      description: 'January Rent',
      note: 'This was the finl payment for that address',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    startDate: undefined,
    endDate: undefined
  }
}

console.log(`Peggy sucks 😕`)