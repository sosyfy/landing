
export default function Hero() {
    return (
        <div className="relative pt-16 pb-32 overflow-hidden">
            <div className="relative">
                <div className="overflow-hidden lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3 lg:gap-24 lg:px-8">
                    <div className="max-w-xl px-4 mx-auto sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div>
                            <div>
                                <h1 className='flex flex-col items-start text-5xl font-extrabold tracking-wide text-white'>
                                    <span>Snap</span>
                                    <span className='text-cyan-400'>Beautiful</span>
                                    <span>Screenshots</span>
                                    <span className='text-violet-600'>Instantly.</span>
                                </h1>
                                <p className="grid mt-6 text-sm font-semibold tracking-wide text-gray-300">
                                    <span>
                                        No design skills?  No problem.
                                    </span>
                                    <span>
                                        Just Snap &rarr; Preview &rarr; share
                                    </span>
                                </p>
                            </div>
                            <div className="flex items-center mt-8 space-x-2">
                               <button  className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-violet-600 hover:bg-violet-700">Download Free</button>  
                               <button  className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-500 hover:bg-cyan-600">Purchase License</button>  
                            </div>
                            <div className='mt-2'>
                                <p className="text-xs font-semibold text-gray-400">
                                  Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-2">
                        <div className="w-full sm:px-6 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img
                                className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                                alt="Inbox user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
