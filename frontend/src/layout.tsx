import { IconArrowsDiagonalMinimize2, IconX } from "@tabler/icons-react"
import { Quit, WindowMinimise } from "../wailsjs/runtime"
import { ReactNode, useEffect, useState } from "react"
type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <div className="flex flex-col">
                <div className="min-w-full h-[20px] flex items-end justify-end">

                    <button onClick={WindowMinimise} className="hover:bg-foreground">
                        <IconArrowsDiagonalMinimize2 />
                    </button>
                    <button onClick={() => { Quit }} className="hover:bg-foreground">
                        <IconX />
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>)
}