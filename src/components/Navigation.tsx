import React from 'react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 shadow-md">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                            href="/"
                        >
                            BoxBox
                        </a>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {(navbarOpen ? <XMarkIcon width={25} height={25}/> : <Bars2Icon width={25} height={25}/>)}
                            
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="/"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Circuits</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="/"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Constructors</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="/"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Drivers</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="/"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Seasons</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="/"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Rankings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation