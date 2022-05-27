import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  status: 'idle',
};
export const fetchAhcPage = createAsyncThunk('auth/fetchAhcPage', async () => { 
  const response = await fetch('https://library.austintexas.gov/aplapi/node/ahc_page/ea51ab6e-a27c-44ff-963f-2f900192a9ca', { 
})
    .then(response => response.json());
            
    return response;
})

const ahcPageSlice = createSlice({
  name: 'ahcPage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAhcPage.fulfilled, (state, action) => {
      state.status =  'idle';
      state.value = action.payload;
    })
  }
})

export default ahcPageSlice.reducer
