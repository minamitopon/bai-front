import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/base/reset.sass'
import '@/styles/base/variable.sass'
import '@/styles/base/common.sass'
import { RouterProvider } from "react-router";
import router from '@/routes/route.tsx'

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('@/mocks/browser')
    return worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
})
