import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // some endpoints might require headers
    })

    return session?.user || null;
}

export const getUserToken = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return session?.session?.token || null;
}

export const requireRole = async (role) => {
    const user = await getUserSession()
    if (!user) {
        redirect('/auth/signin')
    }
    // better-auth admin plugin uses 'role' field for admin.
    // Custom additional field 'userRole' stores seeker/recruiter roles.
    const effectiveRole = user?.role === 'admin' ? 'admin' : (user?.userRole || user?.role);
    if (effectiveRole !== role) {
        redirect('/unauthorized')
    }
    return user;
}