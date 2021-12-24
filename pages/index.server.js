import { Suspense } from 'react'

import Viewer from '../components/viewer.server'

export default function Home() {
  return (
    <div>
      <h1>Server Components with GraphQL Example</h1>
      <Suspense fallback={'Loading...'}>
        <Viewer />
      </Suspense>
    </div>
  )
}
