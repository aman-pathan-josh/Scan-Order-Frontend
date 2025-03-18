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
import { Link } from "react-router-dom"
import { FormEvent, useState } from "react"
import axios from "axios"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"
import { BaseUrl } from "@/utils/constants/apiConstants"
import { SignInEndpoint } from "@/utils/constants/apiEndpointConstants"

export function SignInForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = `${BaseUrl}/${SignInEndpoint}`

    try {
      const response = await toast.promise(
        axios.post(url, formData),
        {
          loading: "Signing in...",
          success: "Login successful! Redirecting...",
          error: "Invalid email or password. Please try again.",
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
    <>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@gmail.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {/* <Link
                      to="/forgot_password"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                      Forgot your password?
                    </Link> */}
                  </div>
                  <Input id="password" type="password" name="password" required onChange={handleInputChange} value={formData.password} />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account? &nbsp;
                <Link to='/signup' className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>

  )
}
