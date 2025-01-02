/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { cn, UppercaseFirstLetter } from "@/lib/utils";
import { Label } from "@/components/aceternity/Label";
import { Input } from "@/components/aceternity/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { toast } from "@/hooks/useToast";
import { useRoleStore } from "@/stores/roles/role";
import { useTranslation } from "react-i18next";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "@tanstack/react-router";

type SignupFormInputs = {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  workplace: string;
  password: string;
  confirmpassword: string;
};

export function SignupForm() {
  const { getRole, getWorkplace } = useRoleStore();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    // watch,
    setValue,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const { t } = useTranslation();
  const router = useRouter();

  const onSubmit: SubmitHandler<SignupFormInputs> = async (credential) => {
    setLoading(true);
    const { data, error } = await authClient.signUp.email({
      email: credential.email,
      password: credential.password,
      name: `${credential.firstname} ${credential.lastname}`,
      role: credential.role,
      workplace: credential.workplace,
    });
    setLoading(false);
    if (error) {
      toast({
        variant: "destructive",
        title: "Sign Up Failed",
        description: error.message,
      });
    } else if (data) {
      router.navigate({
        to: "/dashboard/play",
      });
    }
  };

  useEffect(() => {
    setValue("role", UppercaseFirstLetter(getRole()));
    setValue("workplace", UppercaseFirstLetter(getWorkplace()));
  }, []);

  return (
    <div
      data-testid="signup-form"
      className="px-5 pt-8 max-w-md w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        {t("auth.signup-page.title")}{" "}
        <span className="text-primary">KaoHut</span>
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
        {t("auth.signup-page.heading")}
      </p>
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label data-testid="First Name" htmlFor="firstname">
              {t("auth.signup-page.name.firstname")}
            </Label>
            <Input
              id="firstname"
              placeholder="John"
              type="text"
              {...register("firstname")}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label data-testid="Last Name" htmlFor="lastname">
              {t("auth.signup-page.name.lastname")}
            </Label>
            <Input
              id="lastname"
              placeholder="Dean"
              type="text"
              {...register("lastname")}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label data-testid="Email Address" htmlFor="email">
            {t("auth.signup-page.email")}
          </Label>
          <Input
            id="email"
            placeholder="youremailaddress@gmail.com"
            type="email"
            {...register("email")}
          />
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="role">{t("auth.signup-page.role")}</Label>
            <Input
              disabled
              id="role"
              value={UppercaseFirstLetter(getRole())}
              type="text"
              {...register("role")}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="role">{t("auth.signup-page.workplace")}</Label>
            <Input
              disabled
              id="workplace"
              value={UppercaseFirstLetter(getWorkplace())}
              type="text"
              {...register("workplace")}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label data-testid="Password" htmlFor="password">
            {t("auth.signup-page.password.password")}
          </Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: t("auth.signup-page.password.empty"),
              },
              minLength: {
                value: 8,
                message: t("auth.signup-page.password.condition"),
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&#]{8,}$/,
                message: t("auth.signup-page.password.note"),
              },
            })}
          />
          {errors.password && (
            <span className="text-red-400">{errors.password.message}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label data-testid="Confirm Password" htmlFor="confirmpassword">
            {t("auth.signup-page.confirm-password.confirm")}
          </Label>
          <Input
            id="confirmpassword"
            placeholder="••••••••"
            type="password"
            {...register("confirmpassword", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&#]{8,}$/,
                message:
                  "Password must have at least 1 number, 1 uppercase, 1 lowercase, and 1 special character",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-400">
              {t("auth.signup-page.confirm-password.empty")}
            </span>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-primary to-secondary block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loading ? (
            <LoaderCircle className="animate-spin mx-auto" />
          ) : (
            <>
              {t("auth.signup")} &rarr;
              <BottomGradient />
            </>
          )}
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <p className="text-center cursor-default text-sm">
            {t("auth.signup-page.option")}
          </p>
          <button
            className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-200 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" h-4 w-4 text-neutral-800 dark:text-neutral-300 icon icon-tabler icons-tabler-filled icon-tabler-brand-google"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" />
            </svg>
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <p className="text-center font-semibold">
            {t("auth.signup-page.end")}{" "}
            <a
              href="/auth/accounts/signin"
              className="underline text-primary lg:hover:text-secondary transition-colors duration-150 ease-linear"
            >
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
