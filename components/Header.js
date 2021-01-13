import { Box, Heading, Text, Divider, Link } from '@chakra-ui/react'
export default function Header() {
  return (
    <Box as="header" shadow="md" w="full">
      <Heading as="h1" m="2">
        {process.env.title}
      </Heading>
    </Box>
  )
}
