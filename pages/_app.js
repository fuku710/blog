import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import Layout from '../components/Layout'
import Header from '../components/Header'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bgColor: 'gray.50',
      },
    },
  },
})

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Header></Header>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
