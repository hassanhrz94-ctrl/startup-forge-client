import SignupForm from "./SignupFrom";

export default async function SignupPage({ searchParams }) {
    const params = await searchParams;
    const redirectTo = params?.redirect || "/";

    return <SignupForm redirectTo={redirectTo} />;
}