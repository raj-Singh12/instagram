"use client";
import { getProviders, signIn } from "next-auth/react";
import Header from "@/app/components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Signin = () => {
  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: "http://localhost:3000/admin" });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useRouter();

  useEffect(() => {
     const auth = localStorage.getItem('user');
     if (auth) {
      navigate("/")
     }
  }, [])

  const handlelogin = async () => {
    console.warn("email, password", email, password);
    let result = await fetch("", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct details");
    }
  };
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20" style={{ height: '100%'}}>
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram-image"
        />
        <div className="">
          <div className="flex flex-col items-center">
            <img
              className="w-32 object-cover"
              src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png"
              alt=""
            />
            <form className="flex flex-col items-center mt-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 pl-4 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md mb-2"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 pl-4 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
              />
              <br />
              <button type="submit" onCanPlay={handlelogin} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
                Sign In
              </button>
            </form>
            <p className="text-sm italic my-10 text-center">
              This app is created for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              onClick={loginWithGoogle}
            >
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
