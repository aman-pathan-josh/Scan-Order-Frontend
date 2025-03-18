import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo-light.png'

export default function Footer() {
    const date = new Date;
    const year = date.getFullYear();

    return (
        <>
            <footer className="bg-black rounded-lg shadow-sm m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to='/' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-8" alt="Flowbite Logo" />
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/about" className="hover:text-[#FCBF4B] me-4 md:me-6">About</Link>
                            </li>
                            <li>
                                <Link to="/features" className="hover:text-[#FCBF4B] me-4 md:me-6">Features</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-[#FCBF4B] me-4 md:me-6">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-200 sm:text-center dark:text-gray-200">© {year} <Link to="/" className="hover:underline">Scan&Order™</Link>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}
