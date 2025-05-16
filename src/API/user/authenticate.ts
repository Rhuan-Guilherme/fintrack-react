import { api } from "../axios";

interface AuthenticateProps {
  email: string;
  password: string;
}

export async function authenticateUserAPI({
  email,
  password,
}: AuthenticateProps) {
  const response = await api.post("/authenticate", { email, password });
  return response;
}
