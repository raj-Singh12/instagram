"use client";
import Header from "@/app/components/Header";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if(auth) {
      navigate('/')
    }
  }, [])

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(await result.json());
    localStorage.setItem("user", JSON.stringify(result));

    navigate("/");
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Header />
        <div className="flex justify-center space-x-7 mt-20">
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
              <form>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
              </form>
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purposes
              </p>
              <button
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
                onClick={collectData}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
