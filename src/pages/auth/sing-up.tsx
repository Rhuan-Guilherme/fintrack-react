import { Link } from "react-router";
import googleIcon from "../../assets/icon-google.svg";

export function SingUp() {
  return (
    <>
      <div>
        <h1 className="font-poppins text-3xl font-semibold text-gray-700">
          Crie sua conta
        </h1>
        
      </div>

      <div className="font-roboto mt-5 space-y-5 font-semibold text-gray-500">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm">Email</label>
          <input
            type="email"
            id="email"
            className="rounded-md border-1 border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">Nome</label>
          <input
            type="text"
            id="name"
            className="rounded-md border-1 border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm">Senha</label>
          <input
            type="password"
            id="password"
            className="rounded-md border-1 border-gray-300 p-2"
          />
        </div>
        <button className="w-full cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-gray-100">
          Criar conta
        </button>
      </div>

      <div className="font-roboto my-4 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-sm text-gray-500">ou</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-md border-1 border-gray-300 px-4 py-2 text-gray-500">
        <img src={googleIcon} />
        Cadastre-se com o Google
      </button>

      <div className="font-roboto mt-5 flex items-center justify-center rounded-md bg-gray-100 p-2 text-[14px] text-gray-500">
        Ja tem uma conta?
        <Link to='/sing-in' className="ml-1.5 font-semibold text-indigo-600">
          Entre
        </Link>
      </div>
    </>
  );
}
