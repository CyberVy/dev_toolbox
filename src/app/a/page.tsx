"use client"

import { AutoSubmitStringInput } from "@/components/StringInputs"
import {useRef, useState} from "react"

export default function Page(){

    const [a_href,set_a_href] = useState("")
    const a_ref = useRef<null | HTMLAnchorElement>(null)
    return (
        <>
            <div
                className="text-center mt-4 px-6"
            >
                Generate an HTML anchor element to test if the url is a universal link on apple devices
            </div>
            <div className="py-2 px-6">
                <AutoSubmitStringInput
                    default_url=""
                    callback={(url) => {
                        if (url.startsWith("http")) {
                            try {
                                set_a_href(new URL(url).href)
                            }
                            catch {}

                        }
                    }}
                    description={"Set a url"}
                />
            </div>

            <div className="text-center my-2">
                <a
                    ref={a_ref}
                    href={a_href} target="_blank"
                    onClick={event => {
                        if (a_href === "") {
                            event.preventDefault()
                        }
                    }}
                >
                    Long press me to see if this is a universal link
                </a>
            </div>

            <div className="text-center my-2">
                <a
                    href={`${a_href}.well-known/apple-app-site-association`} target="_blank"
                    onClick={event => {
                        if (a_href === "") {
                            event.preventDefault()
                        }
                    }}
                >
                    Long press me to see apple-app-site-association (AASA) file
                </a>
            </div>

            <div className="my-20 px-6">
                Referrer:
                <div className="px-4">
                    <a
                        href="https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app"
                        className="underline"
                        target="_blank"
                    >
                        Universal Links
                    </a>
                </div>

                <div className="px-4">
                    <a
                        href="https://stackoverflow.com/questions/38450586/prevent-universal-links-from-opening-in-wkwebview-uiwebview"
                        className="underline"
                        target="_blank"
                    >
                        Disable Universal Links
                    </a>
                </div>

                <div className="px-4">
                    <a
                        href="https://github.com/WebKit/WebKit/blob/main/Source/WebKit/UIProcess/API/Cocoa/WKNavigationDelegatePrivate.h
"
                        className="underline"
                        target="_blank"
                    >
                        Private WKNavigationActionPolicy
                    </a>
                </div>

                <div className="px-4">
                    <a
                        href="https://doc.sigmob.com/sigmob/11042/"
                        className="underline"
                        target="_blank"
                    >
                        Universal Link Examples
                    </a>
                </div>

            </div>

        </>
    )
}
