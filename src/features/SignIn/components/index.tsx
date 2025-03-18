import { Link } from 'react-router-dom'
import { SignInForm } from './SignInForm'
import LOGO from '../../../assets/images/logo-two-color-yellow.png'

export default function SignIn() {
    return (
        <div className="flex flex-col mt-10 items-center justify-start px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
            <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-full h-8 mr-2" src={LOGO} alt="scan&order" />
            </Link>
            <div className="w-full max-w-sm">
                <SignInForm />
            </div>
        </div>
    )
}
