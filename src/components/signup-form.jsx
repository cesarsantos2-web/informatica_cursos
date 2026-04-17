
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link";

export function SignupForm() {
  return (
    <form className={"flex flex-col gap-6"}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Crie sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Preencha todos os dados do formulário para criar sua conta 
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Nome completo</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="João Alves"
            required
            className="bg-background" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@exemplo.com"
            required
            className="bg-background" />
          <FieldDescription>
            Nós usaremos para entrar em contato com você 
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input id="password" type="password" required className="bg-background" />
          <FieldDescription>
            Deve possuir mais de 8 caracteres.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirme sua Senha</FieldLabel>
          <Input id="confirm-password" type="password" required className="bg-background" />
          <FieldDescription>Por favor, confirme sua senha.</FieldDescription>
        </Field>
        <Field>
          <FieldDescription>Caso já possua uma conta <Link href={'/login'}><span className="text-[#3FA0FF]">Faça Login.</span></Link></FieldDescription>
          <Button type="submit" className={"bg-[#3FA0FF]"}>Crie sua conta</Button>
        </Field>
       
      </FieldGroup>
    </form>
  );
}
