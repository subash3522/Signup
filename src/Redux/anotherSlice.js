import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiData = () => {
  return axios.get("http://localhost:5001/newtest");
};

export const fetchTodos = createAsyncThunk(
  "Redux/anotherSlice",
  async () => {
    const response = await apiData();
    return response.data;
  }
);

export const anotherSlice = createSlice({
  name: "counter",
  initialState: { data: [], status: "idle", error: null },
  reducers: {
    // You can uncomment or add reducers here as needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Make sure to correctly assign the data to your state
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export any needed action creators
// export const { switcher } = anotherSlice.actions;

export default anotherSlice.reducer;
