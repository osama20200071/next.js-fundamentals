import { PropsWithChildren } from 'react'
import Counter from './counter'

function AuthLayout({ children }: PropsWithChildren) {
  console.log('rendering auth layout')
  return (
    <div>
      <h1>Auth Layout</h1>
      <Counter />
      <div>{children}</div>
    </div>
  )
}

export default AuthLayout
