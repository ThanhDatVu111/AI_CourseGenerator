import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover "
      style={{ backgroundImage: "url('/hero_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
            CourseCraft AI
            <strong className="font-extrabold text-black sm:block">
              {" "}
              Effortless Course Creation, Powered by AI.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Create engaging, high-quality courses in seconds with CourseCraft
            AI, the ultimate AI-powered course builder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
