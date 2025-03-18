import { Link } from 'react-router-dom'
import { SignUpForm } from './SignUpForm'
import LOGO from '../../../assets/images/logo-two-color-yellow.png'

export default function SignUp() {
    return (
        // <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
            <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-full h-8 mr-2" src={LOGO} alt="scan&order"/>
            </Link>
            <div className="w-full max-w-sm">
                <SignUpForm />
            </div>
        </div>
    )
}
