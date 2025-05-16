import { Link } from "react-router";
import googleIcon from "../../assets/icon-google.svg";
import { CheckIcon, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "radix-ui";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticateUserAPI } from "../../API/user/authenticate";

const singInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type FormData = z.infer<typeof singInSchema>;

export function SingIn() {
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(singInSchema),
  });
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  async function handleSingIn(data: FormData) {
    try {
      const authenticateUser = await authenticateUserAPI({
        email: data.email,
        password: data.password,
      });
      console.log(authenticateUser.data);
    } catch (error) {
      console.log(error);
    }
    reset();
  }

  return (
    <>
      <title>Fintrack | Login</title>
      <div className="lg:mb-10">
        <h1 className="font-poppins text-3xl font-semibold text-gray-700 lg:text-4xl">
          Acesse sua conta
        </h1>
        <p className="font-roboto text-sm text-gray-500">
          Organize. Planeje. Conquiste.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleSingIn)}
        className="font-roboto mt-5 space-y-5 font-semibold text-gray-500"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="rounded-md border-1 border-gray-300 p-2"
          />
        </div>
        <div className="relative flex flex-col gap-1">
          <label htmlFor="password" className="text-sm">
            Senha
          </label>
          <input
            {...register("password")}
            type={!visiblePassword ? "password" : "text"}
            id="password"
            className="rounded-md border-1 border-gray-300 p-2"
          />
          <button
            type="button"
            onClick={() => setVisiblePassword(!visiblePassword)}
            className="absolute top-8.5 right-1 cursor-pointer rounded-full px-2"
          >
            {!visiblePassword ? (
              <EyeClosed className="w-4" />
            ) : (
              <Eye className="w-4" />
            )}
          </button>
        </div>
        <div className="flex items-center gap-1.5">
          <Checkbox.Root
            className="h-4 w-4 rounded-sm border-1 border-gray-300 shadow outline-none"
            defaultChecked
            id="c1"
          >
            <Checkbox.Indicator>
              <div className="flex h-full w-full items-center justify-center rounded-sm bg-indigo-600">
                <CheckIcon className="w-2 text-gray-100" />
              </div>
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className="text-xs" htmlFor="c1">
            Lembrar de mim nesse dispositivo
          </label>
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-gray-100"
        >
          Entrar
        </button>
      </form>

      <div className="font-roboto my-4 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-sm text-gray-500">ou</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-md border-1 border-gray-300 px-4 py-2 text-gray-500">
        <img src={googleIcon} />
        Entrar com o Google
      </button>

      <div className="font-roboto mt-5 flex items-center justify-center rounded-md bg-gray-100 p-2 text-[14px] text-gray-500">
        Novo no Fintrack?
        <Link to="/sing-up" className="ml-1.5 font-semibold text-indigo-600">
          Crie uma conta
        </Link>
      </div>
    </>
  );
}
