import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "512085550414-b2k38kgectv5aacltutti9khr7enoouf.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
