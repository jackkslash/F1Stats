import React from 'react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 shadow-md">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                            to="/"
                        >
                            BoxBox
                        </Link>
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
                            <li >
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/Circuits"
                                >
                                    <i className="text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Circuits</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/Constructors"
                                >
                                    <i className="text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Constructors</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/Drivers"
                                >
                                    <i className="text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Drivers</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/Seasons"
                                >
                                    <i className="text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Seasons</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/Rankings"
                                >
                                    <i className="text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Rankings</span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation