import { adminClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

// Single auth client instance — avoids split session state from two createAuthClient() calls.
// baseURL is optional when running on the same domain; defaults to current origin.
export const authClient = createAuthClient({
    plugins: [
        adminClient()
    ]
})

export const { signIn, signUp, signOut, useSession } = authClient