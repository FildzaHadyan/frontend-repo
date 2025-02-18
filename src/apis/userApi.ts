import { IUser } from "./user";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const fetchUserData = async (): Promise<IUser[]> => {
  const response = await fetch(`${API_BASE_URL}/fetch-user-data`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};

export const updateUserData = async (user: IUser): Promise<IUser> => {
  const response = await fetch(`${API_BASE_URL}/update-user-data`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Failed to update user data");
  }
  return response.json();
};
