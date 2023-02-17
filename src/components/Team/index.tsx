import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Memoji } from "../Memoji";

export interface TeamMember {
  name: string;
  role: string;
  memojiSrc: string;
}

export interface TeamProps {
  members: TeamMember[];
}

export const Team = ({ members }: TeamProps) => (
  <Stack direction={["column", "row"]} spacing="8" justifyContent="space-around" w="full">
    {members.map(({ name, role, memojiSrc }, index) => (
      <VStack key={index} spacing="1">
        <Memoji alt={`Memoji ${name}`} src={memojiSrc} />
        <Heading as="h4" size="md">
          {name}
        </Heading>
        <Text fontStyle="italic">{role}</Text>
      </VStack>
    ))}
  </Stack>
);
