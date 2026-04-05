import Image from "next/image"
import img from '../img/Educação4.png'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function Login() {
    return (
        <div className="flex  flex-1 flex-col items-center  bg-linear-to-b from-[#FEFEFD] to-[#a8cef4]">
            <main className="w-full h-full">
                <div className="w-full h-full flex flex-row">
                    <div className="w-xl h-160  flex flex-col justify-center items-center">
                        <h1 className="font-extrabold text-4xl mb-2">Login</h1>
                        <div className=" bg-[#fcfcfe] w-100 h-100 rounded-2xl border p-10 ">

                            <label className="font-extrabold text-2xl mt-10">
                                Usuário<br></br>
                                <Input
                                    className={"w-80 mb-10"}
                                />
                            </label>
                            <label className="font-extrabold text-2xl ">
                                Senha<br></br>
                                <Input
                                    className={"w-80 mb-10"}
                                />
                            </label>
                            <Button variant="outline" className={"p-1 w-30 h-15 font-extrabold bg-[#3FA0FF] text-[#fcfcfe] ml-25 houver:bg-[##2C2C2C]"}>Entrar</Button>
                        </div>
                    </div>
                    <div>
                        <Image
                            className="w-250 h-160"
                            src={img}
                        />
                    </div>
                </div>

            </main>
        </div>
    )
}
