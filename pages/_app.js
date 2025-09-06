import '../styles/globals.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../layout'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  // Get current page name from router
  const getCurrentPageName = () => {
    const path = router.pathname
    if (path === '/') return 'Dashboard'
    if (path === '/incidents') return 'Incidents'
    if (path === '/runbooks') return 'Runbooks'
    return 'Dashboard'
  }

  return (
    <Layout currentPageName={getCurrentPageName()}>
      <Component {...pageProps} />
    </Layout>
  )
}
