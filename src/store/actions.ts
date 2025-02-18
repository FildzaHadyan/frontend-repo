import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserData } from "../apis/userApi";
import { IUser } from "../apis/user";

export const fetchUser = createAsyncThunk<IUser[], void>(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUserData();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
