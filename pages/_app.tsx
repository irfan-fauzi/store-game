/* eslint-disable @next/next/no-sync-scripts */
import '../styles/homepage.css'
import '../styles/utilities.css'
import '../styles/detail.css'
import '../styles/checkout.css'
import '../styles/complete-checkout.css'
import '../styles/sign-in.css'
import '../styles/sign-up.css'
import '../styles/sign-up-photo.css'
import '../styles/sign-up-photo-success.css'
import '../styles/sign-up-success.css'
import '../styles/sidebar.css'
import '../styles/overview.css'
import '../styles/transactions.css'
import '../styles/edit-profile.css'
import '../styles/transactions-detail.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
