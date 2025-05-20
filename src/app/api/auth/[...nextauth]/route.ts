import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  pages: {
    signIn: "/login",
  },
};

// Define handler function to process authentication requests
const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

// Export handler function for both GET and POST requests
export { handler as GET, handler as POST };
