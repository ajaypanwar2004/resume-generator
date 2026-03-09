import { useState } from "react";
import {
  Container,
  Stack,
  Heading,
  Input,
  Textarea,
  Button,
  Text
} from "@chakra-ui/react";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // old messages
    const oldMessages = JSON.parse(localStorage.getItem("messages")) || [];

    // add new message
    const newMessages = [...oldMessages, form];

    // store in localStorage
    localStorage.setItem("messages", JSON.stringify(newMessages));

    alert("Message sent successfully!");

    // clear form
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <Container maxW="6xl" py={20}>

      <Stack spacing={6} textAlign="center" mb={10}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          bgGradient="linear(to-r, purple.500, blue.600)"
          bgClip="text"
        >
          Contact Us
        </Heading>

        <Text color="gray.600">
          If you have any questions or suggestions feel free to contact us.
        </Text>
      </Stack>

      <form onSubmit={handleSubmit}>
        <Stack spacing={5} maxW="500px" mx="auto">

          <Input
            placeholder="Your Name"
            size="lg"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            placeholder="Your Email"
            size="lg"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <Textarea
            placeholder="Your Message"
            size="lg"
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <Button
            size="lg"
            colorScheme="purple"
            type="submit"
          >
            Send Message
          </Button>

        </Stack>
      </form>

    </Container>
  );
};

export default Contact;