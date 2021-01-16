import { Box, Heading, Text, Divider, Link } from '@chakra-ui/react'
export default function Header() {
  return (
    <Box as="header" shadow="md" w="full" bg="blue.800">
      <Heading as="h1" m="2" color="white">
        {process.env.title}
      </Heading>
    </Box>
  )
}
