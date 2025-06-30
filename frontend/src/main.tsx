import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './style.css'
import Layout from './layout'
import { CheckWayland } from "../wailsjs/go/app/App"
const container = document.getElementById('root')

const root = createRoot(container!)
function RootWrapper() {
    const [checkWayland, setCheckWayland] = useState(false)

    const checkwayland = async () => {
        const wayland = await CheckWayland()
        setCheckWayland(wayland)
    }

    useEffect(() => {
        checkwayland()
    }, [])

    return (
        <div>
            {checkWayland ? (
                <div className="p-2 bg-mint-500 min-w-screen min-h-screen">
                    <App />
                </div>
            ) : (
                <div className='bg-transparent min-w-screen min-h-screen'>
                        <div className="rounded-xl p-2 text-text bg-background min-w-screen min-h-screen">
                        <Layout>
                            <App />
                        </Layout>
                    </div>
                </div>
            )}
        </div>
    )

}

root.render(
    <React.StrictMode>
        <RootWrapper />
    </React.StrictMode>
)

