import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "./button"
import Link from "next/link";

import Image from "next/image";
import logo from '../img/chat.png'
function TopBar() {
    return (
        <div className="fixed w-full backdrop-blur-sm">
            <header className="h-[80] flex justify-between items-center bg-[#fcfcfe00]">
                <div className=" flex  flex-row" >
                    <div className="w-60  flex content-center ">
                        <Link href="/"><Image
                            
                            className="dark:invert w-50 h-40"
                            src={logo}
                            alt="Next.js logo"
                            priority
                        /></Link>
                    </div>

                </div>
                <div className="w-80 h-full inline- place-content-around flex items-center content-center ">

                    <Button variant="outline" className={"w-20 h-12 bg-[#2C2C2C] border=[#1B1B1B] text-[#fcfcfe]"}><Link href="/login">Login</Link></Button>

                    <Button variant="outline" className={"w-30 h-12 bg-[#3FA0FF] border=[#16395C] text-[#16395C]"}><Link href="/signup">Cadastre-se</Link></Button>
                </div>
            </header>
        </div>  


    )
}
export default TopBar