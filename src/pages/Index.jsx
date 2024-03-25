import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, FormControl, FormLabel, Input, Select, Flex, Spacer, useToast } from "@chakra-ui/react";

const sessions = [
  {
    id: 1,
    title: "Session 1",
    speakers: ["Speaker 1A", "Speaker 1B", "Speaker 1C"],
  },
  {
    id: 2,
    title: "Session 2",
    speakers: ["Speaker 2A", "Speaker 2B", "Speaker 2C"],
  },
  {
    id: 3,
    title: "Session 3",
    speakers: ["Speaker 3A", "Speaker 3B", "Speaker 3C"],
  },
  {
    id: 4,
    title: "Session 4",
    speakers: ["Speaker 4A", "Speaker 4B", "Speaker 4C"],
  },
];

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSpeakers, setSelectedSpeakers] = useState(sessions.map(() => ""));
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here (e.g., send data to server)
    console.log("Registration submitted:", { name, email, selectedSpeakers });
    toast({
      title: "Registration Successful",
      description: "Thank you for registering for the conference.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Reset form fields
    setName("");
    setEmail("");
    setSelectedSpeakers(sessions.map(() => ""));
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Conference Registration
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          {sessions.map((session, index) => (
            <FormControl key={session.id} id={`session-${session.id}`} isRequired>
              <FormLabel>{session.title}</FormLabel>
              <Select
                value={selectedSpeakers[index]}
                onChange={(e) => {
                  const updatedSpeakers = [...selectedSpeakers];
                  updatedSpeakers[index] = e.target.value;
                  setSelectedSpeakers(updatedSpeakers);
                }}
              >
                <option value="">Select a speaker</option>
                {session.speakers.map((speaker) => (
                  <option key={speaker} value={speaker}>
                    {speaker}
                  </option>
                ))}
              </Select>
            </FormControl>
          ))}
          <Flex>
            <Spacer />
            <Button type="submit" colorScheme="blue" size="lg">
              Register
            </Button>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default Index;
