import { SignInForm } from "../components";

export const SignIn = () => {
  return (
    <div className="min-h-[calc(100vh-144px)] md:h-[calc(100vh-160px)] bg-neutral-400 flex items-start justify-center pb-10 md:pb-0">
      <SignInForm />
    </div>
  );
};
