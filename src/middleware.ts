// middleware.ts
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'

export default withMiddlewareAuthRequired({
  returnTo: '/',  // Redirect to home if unauthenticated
})

export const config = {
  matcher: [
    // Match all dashboard routes
    '/dashboard',
    '/dashboard/:path*',
    
    // Optional: Match any other protected routes
    // '/api/protected/:path*'
  ]
}