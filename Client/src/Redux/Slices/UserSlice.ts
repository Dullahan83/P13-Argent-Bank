import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:3001/api/v1/user";
type UserInfos = {
   createdAt: string;
   email: string;
   firstName: string;
   id: string;
   lastName: string;
   updatedAt: string;
};

interface User {
   isAuthenticated: boolean;
   token: string;
   userInfos: UserInfos;
}

const initialState: User = {
   isAuthenticated: false,
   token: "",
   userInfos: {
      createdAt: "",
      email: "",
      firstName: "",
      id: "",
      lastName: "",
      updatedAt: "",
   },
};

export const LoginUser = createAsyncThunk(
   "user/login",
   async (body: object, thunkApi) => {
      try {
         const response = await axios.post(`${url}/login`, body);
         const { token } = response.data.body;
         sessionStorage.setItem("token", token);
         return token;
      } catch (error: any) {
         return thunkApi.rejectWithValue(error.message);
      }
   }
);

export const retrieveUserInfos = createAsyncThunk(
   "user/getProfile",
   async (token: string, thunkApi) => {
      try {
         const response = await axios.post(
            `${url}/profile`,
            {},
            { headers: { authorization: `Bearer ${token}` } }
         );
         const { body } = response.data;
         return body;
      } catch (error: any) {
         return error.message;
      }
   }
);

export const updateProfileInfos = createAsyncThunk(
   "user/updateProfile",
   async (body: object, thunkApi) => {
      const token = sessionStorage.getItem("token");
      try {
         const response = await axios.put(`${url}/profile`, body, {
            headers: { authorization: `Bearer ${token}` },
         });
         return response.data.body;
      } catch (error: any) {
         return thunkApi.rejectWithValue(error.message);
      }
   }
);

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      logout: (state) => {
         state.isAuthenticated = false;
         state.userInfos = initialState.userInfos;
         state.token = "";
      },
   },
   extraReducers: (builder) => {
      builder.addCase(
         LoginUser.fulfilled,
         (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.token = action.payload;
         }
      );
      builder.addCase(
         retrieveUserInfos.fulfilled,
         (state, action: PayloadAction<UserInfos>) => {
            state.userInfos = action.payload;
         }
      );
      builder.addCase(
         updateProfileInfos.fulfilled,
         (state, action: PayloadAction<UserInfos>) => {
            state.userInfos = action.payload;
         }
      );
   },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
