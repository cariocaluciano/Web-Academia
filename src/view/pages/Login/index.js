import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <div className="flex flex-col gap-1 w-full items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <Input
            label="Digite o seu e-mail"
            type="email"
            placeholder="joaosilva@email.com"
            maxLength={254}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-200 text-xs">{errors.email.message}</span>
          )}

          <Input
            label="Digite a sua senha"
            type="password"
            placeholder="**********"
            maxLength={20}
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-200 text-xs">
              {errors.password.message}
            </span>
          )}

          <div className="mt-2">
            <Button isLoading={isLoading} type="submit">
              Continue
            </Button>

            <p className="space-x-2 mt-3">
              <span className="text-black-500 text-sm font-regular">
                Não possui conta?
              </span>
              <Link
                to="/register"
              >
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
