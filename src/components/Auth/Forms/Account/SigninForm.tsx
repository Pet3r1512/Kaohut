"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/aceternity/Label";
import { Input } from "@/components/aceternity/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/hooks/useToast";
import { CALLBACK_URL } from "@/api/constant";
import { useTranslation } from "react-i18next";

type SigninFormInputs = {
  email: string;
  password: string;
};

export function SigninForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSubmit, register } = useForm<SigninFormInputs>();
  const { t } = useTranslation();
  const onSubmit: SubmitHandler<SigninFormInputs> = async (credentials) => {
    await authClient.signIn.email(
      {
        email: credentials.email,
        password: credentials.password,
        callbackURL: CALLBACK_URL,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
        },
        onError: (ctx) => {
          toast({
            variant: "destructive",
            title: "Sign Up Failed",
            description: ctx.error.message,
          });
        },
      },
    );
  };

  return (
    <div
      data-testid="signin-form"
      className="px-5 pt-8 max-w-md w-[100vw] mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        {t("auth.signin-page.subtitle")}{" "}
        <span className="text-primary">KaoHut</span>
      </h2>
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">{t("auth.signin-page.email")}</Label>
          <Input
            id="email"
            placeholder="youremailaddress@gmail.com"
            type="email"
            {...register("email")}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="password">{t("auth.signin-page.password")}</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            {...register("password")}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-primary to-secondary block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loading ? (
            <LoaderCircle className="animate-spin mx-auto" />
          ) : (
            <>
              {t("auth.signin-page.title")} &rarr;
              <BottomGradient />
            </>
          )}
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <p className="font-semibold text-center cursor-default">
            {t("auth.signin-page.option")}
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
            {t("auth.signin-page.end")}{" "}
            <a
              href="/auth/role"
              className="underline text-primary lg:hover:text-secondary transition-colors duration-150 ease-linear"
            >
              {t("auth.signin-page.signup")}
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
