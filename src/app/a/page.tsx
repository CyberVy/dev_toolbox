"use client"

import { AutoSubmitStringInput } from "@/components/StringInputs"
import { useState } from "react"

export default function Page(){

    const [a_href,set_a_href] = useState("")
    return (
        <>
            <div className="p-2">
                <AutoSubmitStringInput
                    default_url=""
                    callback={(url) => {
                        if (url.startsWith("http")) {
                            set_a_href(url)
                        }
                    }}
                    description={"Set a url"}
                />
            </div>

            <div className="text-center">
                <a href={a_href} target="_blank">
                    click me!
                </a>
            </div>
        </>
    )
}
