import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  SimpleGrid
} from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="7xl" py={20}>

      <Stack spacing={6} textAlign="center" mb={10}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          bgGradient="linear(to-r, purple.500, blue.600)"
          bgClip="text"
        >
          About ResumeGen
        </Heading>

        <Text color="gray.600" fontSize="lg" style={{ fontFamily: "Poppins" }}>
          ResumeGen is a simple and powerful resume builder that helps you
          create professional resumes in minutes. Just enter your information,
          choose a template, and download your resume instantly.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

        <Box p={6} shadow="md" borderRadius="md" bg="gray.50">
          <Heading fontSize="xl" mb={3} color="purple.500">
            Easy to Use
          </Heading>

          <Text color="gray.600">
            Our resume builder is designed to be simple so anyone can create a
            professional resume without technical knowledge.
          </Text>
        </Box>

        <Box p={6} shadow="md" borderRadius="md" bg="gray.50">
          <Heading fontSize="xl" mb={3} color="purple.500">
            Professional Templates
          </Heading>

          <Text color="gray.600">
            Choose from modern and professional resume templates designed to
            help you stand out to recruiters.
          </Text>
        </Box>

        <Box p={6} shadow="md" borderRadius="md" bg="gray.50">
          <Heading fontSize="xl" mb={3} color="purple.500">
            Free & Fast
          </Heading>

          <Text color="gray.600">
            Build, preview and download your resume in minutes completely free
            without complicated steps.
          </Text>
        </Box>

      </SimpleGrid>

    </Container>
  );
};

export default About;