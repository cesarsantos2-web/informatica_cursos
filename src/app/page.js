import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import calendar from "./img/calendar.png"
import faltas from "./img/faltas.png"
import cousers from "./img/courses.png"
import celular from "./img/celularrev1.png"
import notebook from "./img/notebook.png"
import cesar from "./img/Cesar.png"
import vitor from "./img/vitor.png"
import linkedin from "../components/img/linkedin.png"
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-linear-to-b from-[#FEFEFD] to-[#a8cef4]">
      <main className="flex flex-1 w-full  flex-col items-center  py-32 px-60   ">
        <div className="flex flex-col justify-center gap-6 text-center ">
          <h1 className="w text-5xl font-semibold leading-10 tracking-tight  text-black dark:text-zinc-50">
            Organize sua vida escolar <br />com facilidade

          </h1>
          <p className=" text-lg leading-8 text-black">
            Provas, tarefas e horários em um só lugar.

          </p>
        </div>
        <Link href="/login">
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-5">

            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3FA0FF] px-5 text-background transition-colors hover:bg-[#fcfcfe] hover:text-[#3FA0FF] md:w-39.5"
              target="_blank"
              rel="noopener noreferrer"
            >

              Começe Agora
            </a>


          </div>
        </Link>

        <div className=" h-full   w-7xl mt-15 flex flex-row justify-between">
          <div className="h-50 w-100  p-3 flex flex-col justify-center">
            <div className=" flex justify-center">
              <h1 className=" font-bold text-3xl mb-3">O melhor,</h1>
            </div>
            <Image
              src={calendar}
              alt="oi"
            />
            <h1 className="font-black text-xl mt-3">Calendário Escolar</h1>
            <p className="text-sm">Consulte data de atividades e provas com muita mais facilidade </p>
          </div>
          <div className="h-50 w-100  mt-30 p-3 flex flex-col justify-center">
            <div className=" flex justify-center">
              <h1 className=" font-bold text-3xl mb-3">Quando</h1>
            </div>
            <Image
              src={cousers}
              alt="oi"
            />
            <h1 className="font-black text-xl mt-3">Cursos</h1>
            <p className="text-sm">Consulte seus cursos com muita mais facilidade </p>
          </div>
          <div className="h-90 w-100   mt-30 p-3 flex flex-col justify-center">
            <div className=" flex justify-center">
              <h1 className=" font-bold text-3xl mb-3">E onde </h1>
            </div>
            <Image
              src={faltas}
              alt="oi"
            />
            <h1 className="font-black text-xl mt-3">Faltas</h1>
            <p className="text-sm">Consulte suas faltas com muita mais facilidade </p>
          </div>

        </div>
        <div className=" h-full w-7xl flex flex-row justify-between items-center">
          <div className="h-90 w-100  p-3 flex flex-col justify-center">

            <Image
              src={celular}
              alt="oi"
            />
            <h1 className="font-black text-xl mt-3">App Mobile</h1>
            <p className="text-sm">Acesse de onde quiser com nosso app</p>
          </div>
          <div className=" flex flex-col justify-center">
            <h1 className=" font-bold text-3xl mb-3 tracking-[20]">Quiser</h1>

          </div>
          <div className="h-90 w-100  p-3 flex flex-col justify-center">

            <Image
              src={notebook}
              alt="oi"
            />
            <h1 className="font-black text-xl mt-3">Página Web</h1>
            <p className="text-sm">Acesse de onde quiser no seu navegador</p>
          </div>

        </div>
        <div className="mb-5">
          <h1 className="font-extrabold text-4xl">Nossa Equipe</h1>
        </div>
        <div className=" h-full w-7xl flex flex-row justify-between">

          <div className="border-2 w-120 h-150 rounded-2xl border-black flex flex-col items-center ">
            <Image
              className=" mt-10 h-100 w-100"
              src={vitor}
            />
            <div className="mt-2 items-center flex flex-col">
              <h1 className="font-extrabold text-2xl">Vitor Hugo</h1>
              <p> Tecnico em informática - IFMS</p>

            </div>
            <div className=" h-10 flex flex-row items-center">
              <p>Conheça mais →</p>
              <a

                href="https://www.linkedin.com/in/vitor-hugo-da-silva-8375773a7"
              >
                <Image
                  alt="Logo Linkedin"
                  className="w-10"
                  src={linkedin}
                />
              </a>
            </div>
          </div>
          <div className="border-2 w-120 h-150 rounded-2xl border-black flex flex-col items-center ">

            <Image
              className=" mt-10 h-100 w-100"
              src={cesar}
            />
            <div className="mt-2 items-center flex flex-col">
              <h1 className="font-extrabold text-2xl">César Augusto</h1>
              <p> Tecnico em informática - IFMS</p>

            </div>
            <div className=" h-10 flex flex-row items-center">
              <p>Conheça mais →</p>
              <a

                href="https://www.linkedin.com/in/césar-augusto-2a1747400/"
              >
                <Image
                  alt="Logo Linkedin"
                  className="w-10"
                  src={linkedin}
                />
              </a>
            </div>
          </div>

        </div>
        <div className="mt-10">
          <h1 className="font-extrabold text-4xl">FeedBacks :<span className="text-2xl">P</span></h1>
        </div>
        <div className=" mt-5 justify-between w-7xl h-full flex flex-wrap gap-2">

          


        </div>
      </main>
    </div>
  );

}