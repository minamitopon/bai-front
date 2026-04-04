import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/base/reset.sass'
import '@/styles/base/variable.sass'
import '@/styles/base/common.sass'
import { RouterProvider } from "react-router";
import router from '@/routes/route.tsx'

if (import.meta.env.DEV) {
  import('@/mocks/browser').then(({ worker }) => {
    worker.start();
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
