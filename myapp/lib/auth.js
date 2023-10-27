import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

import { getServerSession } from "next-auth";
import client from "./prismadb";


export const authOptions = {
    adapter: PrismaAdapter(client),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
  };
  
  export const getAuthSession = () => getServerSession(authOptions);
