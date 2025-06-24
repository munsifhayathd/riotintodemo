import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

// Hardcoded user for simplicity
const HARDCODED_USER = {
  id: "1",
  email: "admin@riotinto.com",
  password: "admin123",
  first_name: "Admin",
  last_name: "User",
};

// Extended user type
interface ExtendedUser {
  id: string;
  email: string;
  name: string;
  first_name: string;
  last_name: string;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<ExtendedUser | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Check against hardcoded credentials
        if (
          credentials.email === HARDCODED_USER.email &&
          credentials.password === HARDCODED_USER.password
        ) {
          return {
            id: HARDCODED_USER.id,
            email: HARDCODED_USER.email,
            name: `${HARDCODED_USER.first_name} ${HARDCODED_USER.last_name}`,
            first_name: HARDCODED_USER.first_name,
            last_name: HARDCODED_USER.last_name,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          first_name: token.first_name,
          last_name: token.last_name,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const extendedUser = user as ExtendedUser;
        return {
          ...token,
          id: extendedUser.id,
          first_name: extendedUser.first_name,
          last_name: extendedUser.last_name,
        };
      }
      return token;
    },
  },
};

export const auth = () => NextAuth(authOptions); 