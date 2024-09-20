import NextAuth from "next-auth"
import { PrismaAdapter } from  '@auth/prisma-adapter'
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
 
export const { 
    handlers,
    auth,
    signIn,
    signOut,
 } = NextAuth({
    adapter:PrismaAdapter(db),
    session:{strategy:'jwt'},
    ...authConfig,
});


// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"
 
// export const { auth, handlers } = NextAuth({
//   providers: [GitHub],
// })