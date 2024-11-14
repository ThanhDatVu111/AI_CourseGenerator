import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(
    ['/dashboard(.*)']
)

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})

// createRouteMatcher: This is used to define which routes should be protected. In your case, it’s matching /dashboard(.*), which means any route that starts with /dashboard will be protected by Clerk's auth().protect().

// clerkMiddleware: The Clerk middleware ensures that only authenticated users can access these protected routes. If the user is not signed in, they will be redirected to the sign-in page.

// auth().protect(): This function checks whether the user is authenticated. If not, they will be redirected to the sign-in page.

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}