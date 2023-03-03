import clsx from "clsx"

type FeatureProps = {
    titleLeft?: string
    titleRight?: string
    titleHighlight?: string
    subTittle: string 
    imgSrc: string | undefined
    className?: string
}


export default function Feature({
    titleLeft,
    titleRight,
    titleHighlight,
    subTittle,
    imgSrc,
    className,
}: FeatureProps ) {
    return (
        <div className="relative">
            <div className={clsx("max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8", className)}>
                <div>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        <span>{titleLeft} </span>  
                        <span className='text-cyan-400'>{titleHighlight} </span>
                        <span>{titleRight}</span>
                    </h2>
                    <p className="mx-auto mt-1 text-base text-center text-gray-400">
                       {subTittle} 
                    </p>
                </div>
                <div className="mt-12 max-h-md">
                    <img
                        className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                        src={imgSrc}
                        alt="feature Image"
                    />
                </div>
            </div>
        </div>
    )
}
