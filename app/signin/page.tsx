"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



export const description =
  "A sign up form with first name, last name, email, password, and mobile number inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

function SignIn() {
  const router = useRouter(); // Get the router object

  const handleSignUp = () => {
    // Execute some logic here if needed
    setTimeout(() => {
      router.push('/login'); // Delayed redirect to '/login'
    }, 3000); // Delay for 3 seconds (3000 milliseconds)
  };

  useEffect(() => {
    handleSignUp(); // Call on component mount if you want it to run immediately
  }, []);

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mobile-number">Mobile Number</Label>
            <Input
              id="mobile-number"
              type="tel"
              placeholder="+1234567890"
              pattern="[+]{1}[0-9]{11,14}"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button onClick={handleSignUp} type="submit" className="w-full" >
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="#" className="ml-auto inline-block text-sm underline">Sign in</a>
        </div>
      </CardContent>
    </Card>
  )
}

export default SignIn;
