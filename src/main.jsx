import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MainLayouts from '@layouts/MainLayouts.jsx'
import App from './App.jsx'
import StreamingVideo from '@pages/video/Video.jsx'

import './index.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "streaming",
        element: <StreamingVideo />,
      }  
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
