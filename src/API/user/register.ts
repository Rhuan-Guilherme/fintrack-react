import { api } from "../axios";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export async function registerUserAPI({
  name,
  email,
  password,
}: RegisterProps) {
  const response = await api.post("/register", { name, email, password });
  return response;
}
