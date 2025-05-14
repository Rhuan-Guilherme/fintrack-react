import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-gray-200">
      <div className="hidden">AuthLayout</div>
      <h1 className="font-poppins font-xl absolute top-10 left-8 font-semibold">
        Fintrack
      </h1>
      <div className="rounded-md bg-gray-50 p-5 shadow">
        <Outlet />
      </div>
    </div>
  );
}
