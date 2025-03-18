import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { BaseUrl } from "@/utils/constants/apiConstants"
import { SignUpEndpoint } from "@/utils/constants/apiEndpointConstants"

export function SignUpForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {

    const [formData, setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone_number": "",
        "password": "",
        "password_confirmation": ""
    })

    const navigate = useNavigate();

    const handleInputChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const url = `${BaseUrl}/${SignUpEndpoint}`

        try {
            const response = await toast.promise(
                axios.post(url, formData),
                {
                    loading: "Creating Account...",
                    success: "Account has been created! Redirecting...",
                    error: "Invalid input. Please try again.",
                }
            );

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/menu");
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">SignUp</CardTitle>
                    <CardDescription>
                        create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="gap-2 flex flex-row w-full">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="text">First Name</Label>
                                    <Input
                                        id="first_name"
                                        type="text"
                                        placeholder="John"
                                        value={formData.first_name}
                                        name="first_name"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="email">Last Name</Label>
                                    <Input
                                        id="last_name"
                                        type="text"
                                        placeholder="Doe"
                                        value={formData.last_name}
                                        name="last_name"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john.doe@gmail.com"
                                    value={formData.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone_number">Phone Number</Label>
                                <Input
                                    id="phone_number"
                                    type="text"
                                    placeholder="(+91) xxx-xxx-xxxx"
                                    value={formData.phone_number}
                                    name="phone_number"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input 
                                    id="password" 
                                    type="password" 
                                    value={formData.password} 
                                    name="password"
                                    onChange={handleInputChange} 
                                    required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Confirm Password</Label>
                                </div>
                                <Input 
                                    id="password_confirmation" 
                                    type="password_confirmation" 
                                    value={formData.password_confirmation} 
                                    name="password_confirmation"
                                    onChange={handleInputChange} 
                                    required />
                                {/* <Link to="/forgot_password"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                    Forgot your password?
                                </Link> */}
                            </div>
                            <Button type="submit" className="w-full">
                                Sign Up
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account? &nbsp;
                            <Link to="/signin" className="underline underline-offset-4">
                                Sign in
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
