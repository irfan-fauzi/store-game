import { ReactNode } from 'react'
import Head from 'next/head'
import { Header, Footer } from '../'
import styles from '../layout/layout.module.css'

interface LayoutProps {
  children: ReactNode
  titlePage: string
}
const Layout = (props: LayoutProps) => {
  const {children, titlePage} = props
  return (
    <>
    <Head>
      <title>NextJs | {titlePage}</title>
      <meta name="description" content="website penjualan" />
    </Head>
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
    </>
  )
}

export default Layout
