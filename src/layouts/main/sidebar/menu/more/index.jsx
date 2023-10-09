import {Popover} from "@headlessui/react";

export default function More(){
    return(
    <Popover className="relative">
        <Popover.Button>
            <button className="group flex w-full justify-items-start items-start">
                <div className="p-3 inline-flex group-hover:bg-[#eff3f41a] transition-colors rounded-full">
                    <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                        <path
                            fill="currentColor"
                            d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                        />
                    </svg>
                    <div className="text-[20px] mr-4 ml-5 h-6 leading-6">
                        Daha Fazla
                    </div>
                </div>
            </button>
        </Popover.Button>
        <Popover.Panel className="absolute bottom-0 left-0">
            <div className="p-5">
                <p>hello world</p>
            </div>
        </Popover.Panel>
    </Popover>
    )
}