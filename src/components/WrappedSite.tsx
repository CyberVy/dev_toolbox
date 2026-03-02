"use client"

function WrappedSite({ src }: { src: string }) {
    return (
        <div className={`w-full h-full`}>
            <iframe
                src={src ? src : undefined}
                className={`w-full h-full rounded-xl`}
                sandbox={`allow-scripts allow-same-origin allow-forms allow-presentation`}
                allowFullScreen
            >
            </iframe>
        </div>
    )
}

export { WrappedSite }
