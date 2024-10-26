"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Header() {
  const quotes = [
    "“Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela",
    "“Teaching is the one profession that creates all other professions.” – Unknown",
    "“The best way to predict the future is to create it.” – Peter Drucker",
    "“A teacher affects eternity; he can never tell where his influence stops.” – Henry Adams",
    "“The beautiful thing about learning is that no one can take it away from you.” – B.B. King",
    "“Education breeds confidence. Confidence breeds hope. Hope breeds peace.” – Confucius",
    "“Learning never exhausts the mind.” – Leonardo da Vinci",
    "“An investment in knowledge pays the best interest.” – Benjamin Franklin",
    "“Tell me and I forget. Teach me and I remember. Involve me and I learn.” – Benjamin Franklin",
    "“The roots of education are bitter, but the fruit is sweet.” – Aristotle",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFade(true); // Fade in the new quote
      }, 1000); // Adjust this to control the fade-out duration
    }, 6000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="flex justify-between items-center p-5 shadow-xl">
      {/* Favicon */}
      <Link href={"/dashboard"}>
        <Image src={"/favicon.svg"} width={40} height={40} />
      </Link>
      {/* Centered Quote with Fade Animation */}
      <div className="flex-grow text-center">
        <p
          className={`text-lg md:text-xl lg:text-2xl italic text-black transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {quotes[currentQuoteIndex]}
        </p>
      </div>
      {/* User Icon */}
      <UserButton />
    </div>
  );
}

export default Header;
