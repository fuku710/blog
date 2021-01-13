import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/Layout'
import Header from '../components/Header'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Header></Header>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
