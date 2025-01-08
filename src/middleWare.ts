// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export const middleware = (request: NextRequest) => {
//   // Access cookies from the request object
//   const isLoggedIn = request.cookies.get("isLoggedIn")?.value;

//   if (!isLoggedIn) {
//     // Redirect to '/about-2' if the user is not logged in
//     const redirectUrl = new URL('/about-2', request.url);
//     return NextResponse.redirect(redirectUrl);
//   }

//   // Allow the request to continue
//   return NextResponse.next();
// };

// // Apply middleware to all routes (including nested routes)
// export const config = {
//   matcher: ['/'], // Adjust as needed, e.g., ['/', '/protected/*']
// };
