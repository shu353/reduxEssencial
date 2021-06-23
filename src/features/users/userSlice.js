import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'tarcoles' },
  { id: '1', name: 'siquirres' },
  { id: '2', name: 'monte verde' },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default userSlice.reducer
