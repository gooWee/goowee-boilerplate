import { createSlice } from '@reduxjs/toolkit'

import api from '../api'

// REDUCERS
export const slice = createSlice({
  name: 'exampleUsers',
  initialState: {
    value: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload
    },
  },
})

// ACTIONS
export const { setUsers } = slice.actions

// THUNKS
export const getUsers = () => dispatch => {
  api.accounts.getUsersEndpt()
    .then(res => dispatch(setUsers(res.users)))
}

// THUNKS
export const selectUsers = state => state.exampleUsers.value

export default slice.reducer
