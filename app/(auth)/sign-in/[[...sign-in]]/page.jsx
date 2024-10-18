import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/signin_bg.png')" }}
    >
      <div className="p-8 max-w-xl w-full">
        <div className="flex flex-col items-center transform scale-110">
          <SignIn />
        </div>
      </div>
    </section>

  )
}