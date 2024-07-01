import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import { IconChevronLeft } from '@tabler/icons-react'


export default function Admin({ children }) {
    return (
        <Fragment>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <div className="flex h-full max-h-screen flex-col bg-slate-100 text-white gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">

                            <Link href="/" className="flex items-center gap-2 font-semibold">
                                <img src="src/img/logo.png" style={{ width: '200px', height: "50px" }} />
                            </Link>
                            <Button
                                size="icon"
                                className="ml-auto mx-4 h-8 w-10 text-black bg-transparent border-none hover:bg-transparent focus:bg-transparent"
                            >
                                <IconChevronLeft size={18}/>
                            </Button>

                        </div>
                        <div className="flex-1">
                            <Sidebar />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col">
                    <Navbar />
                    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </Fragment>
    )
}
