import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-gray-200 lg:bg-gray-50">
      <div className="flex justify-center lg:w-full">
        <div className="min-w-85 rounded-md bg-gray-50 p-5 shadow lg:w-100 lg:bg-transparent lg:shadow-none">
          <div className="font-poppins font-xl mb-20 font-semibold lg:hidden">
            Fintrack
            <p className="font-roboto text-xs font-semibold text-gray-500">
              O seu app para controle financeiro.
            </p>
          </div>
          <Outlet />
        </div>
      </div>
      <div className="hidden h-full w-full p-2 lg:block">
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-indigo-600">
          images
        </div>
      </div>
    </div>
  );
}
