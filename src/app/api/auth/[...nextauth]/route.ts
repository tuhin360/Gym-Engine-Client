import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          console.log("NextAuth Authorize attempt:", credentials?.email);
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = res.data.data;

          if (user) {
            console.log("NextAuth Authorize Success:", user.email);
            // Map _id to id for NextAuth compatibility
            return {
              ...user,
              id: user._id,
            };
          }
          console.log("NextAuth Authorize Failed: No user data returned");
          return null;
        } catch (error: any) {
          console.error("NextAuth Authorize Error:", error.response?.data?.message || error.message);
          throw new Error(error.response?.data?.message || "Invalid credentials");
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any)._id;
        token.role = (user as any).role;
        token.accessToken = (user as any).token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).accessToken = token.accessToken;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
