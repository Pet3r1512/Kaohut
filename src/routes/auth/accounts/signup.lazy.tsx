import { SignupForm } from '@/components/Auth/Forms/Account/SignupForm'
import AuthLayout from '@/components/Auth/Layout/AuthLayout'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/accounts/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthLayout>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        Create an account
      </h1>
      <SignupForm />
    </AuthLayout>
  )
}
