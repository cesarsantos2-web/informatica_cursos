
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}) {
  return (
    <form className="flex flex-col m-5">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Faça login na sua conta </h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira seu email e senha para fazer login
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@exemplo.com"
            required
            className="bg-background" />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Senha</FieldLabel>
            
          </div>
          <Input id="password" type="password" required className="bg-background" />
        </Field>
        <Field>
          <Button type="submit" className={"bg-[#3FA0FF]"}>Login</Button>
        </Field>

      </FieldGroup>
    </form>
  );
}
