import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../apis/user";
import { fetchUser } from "./actions";

interface UserState {
  loading: boolean;
  data: IUser[] | null;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  data: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default userSlice.reducer;
