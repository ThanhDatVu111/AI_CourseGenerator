import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://wallpapercave.com/wp/wp4298246.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center min-h-screen px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="flex flex-col items-center max-w-xl lg:max-w-3xl p-8">
            <img src="/favicon.svg" alt="Logo" className="h-8 sm:h-10" />

            <h1 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Courcraft AI
            </h1>
            <p className="mt-5 leading-relaxed text-gray-500">
              Sign in to unlock new knowledge and expand your learning journey.
            </p>
            <p className="mt-5">
              <SignIn />
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}