import '../styles/globals.css'
import DefaultLayout from "../components/layouts/DefaultLayout"

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
