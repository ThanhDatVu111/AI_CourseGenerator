import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-cover " style={{ backgroundImage: "url('/hero_bg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
            CourseCraft AI 
            <strong className="font-extrabold text-black sm:block"> Effortless Course Creation, Powered by AI. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Create engaging, high-quality courses in seconds with CourseCraft AI, the ultimate AI-powered course builder.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#d68605] focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow-lg hover:text-[#d68605] focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
