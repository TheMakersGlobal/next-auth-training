import NextAuth, {DefaultSession} from "next-auth"
import { PrismaAdapter } from  '@auth/prisma-adapter'
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"
import {UserRole} from '@prisma/client';

declare module '@auth/core';

export const { 
    handlers,
    auth,
    signIn,
    signOut,
 } = NextAuth({
    callbacks:{
        // async signIn({user}){
        //     const existingUser = await getUserById(user.id);

        //     if (!existingUser || !existingUser.emailVerified) {
        //         return false;
        //     }
        //     return true;
        // },
        async session({token,session}){
            console.log({
                sessionToken:token,
            })
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }            
            return session;
        },
        async jwt({token,user}){
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;
            token.role = existingUser.role;
            return token;
        }
    },
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