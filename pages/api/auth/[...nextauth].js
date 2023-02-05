import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import clientPromise from "../../../lib/mongo_client_promise"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        const response = await fetch('https://discord.com/api/v10/users/@me', {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        })
        const json = await response.json()
        const client = await clientPromise
        const db = client.db("phanta")
        const filter = { _id: json["id"] }
        const doc = {
          _id: json["id"],
          _updated: Date.now(),
          _accessToken: token.accessToken,
          user: json
        }
        const exists = await db.collection("users").findOne(filter)
        if (exists) {
          const post = await db.collection("users").replaceOne(filter, doc)
        } else {
          const post = await db.collection("users").insertOne(doc)
        }
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }
}

export default NextAuth(authOptions)