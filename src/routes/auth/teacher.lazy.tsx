import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/teacher')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/teacher"!</div>
}
