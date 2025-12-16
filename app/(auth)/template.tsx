import { PropsWithChildren } from 'react'
import Counter from './counter'

function AuthTemplate({ children }: PropsWithChildren) {
  console.log('rendering auth template')
  return (
    <div>
      <h1>Auth template</h1>
      <Counter />
      <div>{children}</div>
    </div>
  )
}

export default AuthTemplate
