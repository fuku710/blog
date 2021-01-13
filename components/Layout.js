import { Flex, Container } from '@chakra-ui/react'
export default function Layout(props) {
  return (
    <Flex direction="column" align="center">
      {props.children}
    </Flex>
  )
}
