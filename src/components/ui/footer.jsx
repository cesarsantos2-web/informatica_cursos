import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "./button"

import Image from "next/image";
import logo from '../img/chat.png'
import insta from '../img/instagram.png'
import x from '../img/x.jpg'
import linkedin from '../img/linkedin.png'
function Footer() {
    return (
        <div>
            <footer className="h-[180] flex bg-[#fcfcfe00]  flex-col">
                <div className=" w-full border-be-[#1B1B1B] border justify-between  flex flex-row">
                    <div className=" flex h-20 flex-row" >
                        <div className="w-60  flex content-center ">
                            <Image
                                className="dark:invert w-30 h-20"
                                src={logo}
                                alt="Next.js logo"
                                priority
                            />
                        </div>

                    </div>
                    <div className="w-80 h-full inline- place-content-around flex items-center content-center ">
                        <h1>Suporte</h1>
                        <h1>Entre em contato</h1>
                        <h1>;)</h1>
                    </div>
                </div>
                <div className="flex flex-col text-base font-medium sm:flex-row m-2 content-center">
                    <ul className="flex flex-row ">
                        <li className="max-w-20">
                            <Image
                            src={insta}/>
                        </li>
                        <li className="max-w-20 ">
                            <Image
                            src={linkedin}/>
                        </li>
                        <li className=" items-center flex max-w-15 ">
                            <Image

                            src={x}/>
                        </li>
                        
                        
                    </ul>
                </div>
            </footer>
        </div>


    )
}
export default Footer