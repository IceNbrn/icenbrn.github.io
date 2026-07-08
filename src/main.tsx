import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/icenstyles.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createRouter, createBrowserHistory} from '@tanstack/react-router'
import {routeTree} from "./routeTree.gen.ts";

const router = createRouter({
    routeTree,
    scrollRestoration: true,
    scrollRestorationBehavior: 'instant',
    history: createBrowserHistory(),
})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById('root')!
ReactDOM.createRoot(rootElement).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)