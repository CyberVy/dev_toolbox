"use client"

import { WrappedSite } from "@/components/WrappedSite"
import { AutoSubmitStringInput } from "@/components/StringInputs"
import { useEffect, useState } from "react"

export default function Page(){
    const [src, set_src] = useState("")

    useEffect(() => {
        const url = new URL(location.href)
        const site_url = url.searchParams.get("url") || localStorage.getItem("wrapped_url") || ""
        if (site_url){
            localStorage.setItem("wrapped_url",site_url)
            history.replaceState(null,"","/wrapper")
            set_src(site_url)
        }
    }, [])

    return (
        <div className={`h-[100vh] w-[100vw]`}>
            <div className={`px-4 py-2`}>
                <AutoSubmitStringInput
                    default_url={src}
                    callback={url => {
                        localStorage.setItem("wrapped_url",url)
                        set_src(url)
                    }}
                    description={"Site URL"}
                />
            </div>

            {src &&  /https?:\/\/.*/.test(src) &&
                <WrappedSite
                    src={src}
                />}
        </div>
    )
}
