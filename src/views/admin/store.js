// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CONFIG from "../../config";
// ** Axios Imports
import axios from "axios";
// get all prioritas nasional
export const getAll = createAsyncThunk("appUsers/getAll", async () => {
  const response = await axios.get(`${CONFIG.API_URL}`);
  console.log("redux1", response);
  return response.data;
});
// // get detail RK
// export const getRkId = createAsyncThunk("appUsers/getId", async (id) => {
//   const response = await axios.get(`${CONFIG.API_URL}/productrk/${id}`);
//   console.log("redux2", response);
//   return response.data.data;
// });
// export const getAllData = createAsyncThunk("appUsers/getAllData", async () => {
//   const response = await axios.get("/api/users/list/all-data");
//   return response.data;
// });

// export const getData = createAsyncThunk("appUsers/getData", async (params) => {
//   const response = await axios.get("/api/users/list/data", params);
//   return {
//     params,
//     data: response.data.users,
//     totalPages: response.data.total,
//   };
// });

// export const getUser = createAsyncThunk("appUsers/getUser", async (id) => {
//   const response = await axios.get("/api/users/user", { id });
//   return response.data.user;
// });

// export const addUser = createAsyncThunk(
//   "appUsers/addUser",
//   async (user, { dispatch, getState }) => {
//     await axios.post("/apps/users/add-user", user);
//     await dispatch(getData(getState().users.params));
//     await dispatch(getAllData());
//     return user;
//   }
// );

// export const deleteUser = createAsyncThunk(
//   "appUsers/deleteUser",
//   async (id, { dispatch, getState }) => {
//     await axios.delete("/apps/users/delete", { id });
//     await dispatch(getData(getState().users.params));
//     await dispatch(getAllData());
//     return id;
//   }
// );

export const appUsersSlice = createSlice({
  name: "appUsers",
  initialState: {
    dataAll: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.dataAll = action.payload;
      })
    //   .addCase(getRkId.fulfilled, (state, action) => {
    //     state.dataIdRk = action.payload;
    //   });
    // .addCase(getAllData.fulfilled, (state, action) => {
    //   state.allData = action.payload;
    // })
    // .addCase(getData.fulfilled, (state, action) => {
    //   state.data = action.payload.data;
    //   state.params = action.payload.params;
    //   state.total = action.payload.totalPages;
    // })
    // .addCase(getUser.fulfilled, (state, action) => {
    //   state.selectedUser = action.payload;
    // });
  },
});

export default appUsersSlice.reducer;
