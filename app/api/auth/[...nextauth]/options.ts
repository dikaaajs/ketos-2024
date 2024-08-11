import connectDB from "@/libs/connectDB";
import User from "@/models/User";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        // login
        try {
          await connectDB();
          let findUser = await User.findOne({ username });
          if (findUser === null) {
            return null;
          }

          console.log(findUser);
          const passwordMatch = password === findUser.password;
          if (!passwordMatch) {
            return null;
          }

          const tmp = findUser;
          findUser.name = tmp.username;
          return findUser;
        } catch (error) {
          console.log("error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
