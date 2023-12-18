"use client";
import Header from "@/app/components/Header";
import { useState } from "react";

export default function signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the data to the server
      const response = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Signup successful, redirect or show a success message.
      } else {
        // Signup failed, handle error response.
        const errorData = await response.json();
        // Display error to the user.
      }
    } catch (error) {
      // Handle network errors or other issues.
    }
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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
                <button type="submit">Sign Up</button>
              </form>
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purposes
              </p>
              <button className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
