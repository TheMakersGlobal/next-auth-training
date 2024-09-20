//an array of routes that are accessible to the public
//do not require for authentication

export const publicRoutes = [
    "/",

];
//array of routes that are used for authentication
//these routes will redirect logged in users for authentication
export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

//the prefix for API authentication routes
//routes that start with this prefix are used for API

export const apiAuthPrefix = "/api/auth"; 

//the default redirect path after login in
export const DEFAULT_LOGIN_REDIRECT = "/settings";