"use client";

import React from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions";
import { RootState } from "../store/store";

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.user
  );

  const handleClick = () => {
    dispatch(fetchUser());
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Fetch User Data
      </Button>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {data && <Typography>{JSON.stringify(data)}</Typography>}
    </div>
  );
};

export default UpdateButton;
