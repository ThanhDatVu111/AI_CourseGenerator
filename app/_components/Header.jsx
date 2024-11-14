"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function Header() {
  const reviews = [
    "“Courcraft AI has transformed my learning experience!” – Alex J.",
    "“A fantastic platform that has expanded my knowledge.” – Taylor R.",
    "“Learning made easy and engaging. Highly recommend!” – Jamie K.",
    "“The courses are insightful and interactive.” – Chris L.",
    "“Amazing resources and a great community!” – Jordan M.",
    "“The best investment in my education.” – Riley S.",
    "“Exceptional platform for growth and learning.” – Casey N.",
    "“An absolute game-changer for my career.” – Pat F.",
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setFade(true);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="flex justify-between items-center p-5 shadow-xl">
      {/* Enlarged Logo */}
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          width={200}
          height={130}
          alt="Courcraft AI Logo"
        />
      </Link>

      {/* Centered Review with Fade Animation */}
      <div className="flex-grow text-center">
        <p
          className={`text-lg md:text-xl lg:text-2xl italic text-black transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {reviews[currentReviewIndex]}
        </p>
      </div>

      {/* Get Started Button */}
      <Link href={"/dashboard"}>
        <Button>Get Started</Button>
        {/* When clicked, this will trigger navigation to the dashboard, 
        and the middleware will check if the user is authenticated. 
        If not, they will be redirected to the sign-in page. */}
      </Link>

      {/* User Icon */}
      <UserButton />
    </div>
  );
}

export default Header;
