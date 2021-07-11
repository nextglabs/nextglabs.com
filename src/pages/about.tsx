import { SOCIAL } from "@/config/social";
import { Button, Center, Image, Text, Box, Heading, Link, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { AiFillMediumSquare } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const Index = () => (
	<Center>
		<Box maxW="container.md" textAlign="center">
			<Heading as="h2" size="xl" mb="8">
				<span className="underline">About Me?</span>
			</Heading>
			<VStack spacing="8">
				<Text fontSize="xl">
					👋 I’m Bassem. 👨‍✈ Airline Pilot, 👨🏻‍💻 Software Engineer, 👨🏻‍🎨 UI/UX Designer,
					<br />
					🎸 Musician and 🏋🏻‍♀️ Fitness Addict.
				</Text>
				<Text>
					Right now, I’m a FullStack Software Engineer &amp; Designer at{" "}
					<Link isExternal variant="colored" href="https://coradine.com">
						Coradine
					</Link>
					. Before Coradine, I helped my father with his web-design agency, building websites, software and
					Corporate Design (both digital &amp; print) for small to medium-sized companies.
				</Text>
				<HStack spacing="4">
					<Text>
						I’m also an airline pilot. It was my dream since I was 4 years old. This dream came true in 2018
						when I got my first job as an airline First Officer. I now fly for one of the biggest airlines
						in Europe.
					</Text>
					<Image maxW="28" src="assets/images/memoji-pilot.png" alt="airline-pilot-memoji" />
				</HStack>
				<Heading as="h3" size="md" my="12">
					<span className="underline">Open-Source</span>
				</Heading>
				<Text>I regularly contribute to the open-source community.</Text>
				<Link href={SOCIAL.GITHUB_ACCOUNT_URL} isExternal>
					<Button variant="link" size="sm" rightIcon={<FiGithub />}>
						Browse My Code
					</Button>
				</Link>
				<Heading as="h3" size="md" my="12">
					<span className="underline">Writing</span>
				</Heading>
				<Text>I regularly write quality content on Medium. You can check my latest articles.</Text>
				<Link href={SOCIAL.MEDIUM_ACCOUNT_URL} isExternal>
					<Button variant="link" size="sm" rightIcon={<AiFillMediumSquare />}>
						Read My Articles
					</Button>
				</Link>
				<Heading as="h3" size="md" my="12">
					<span className="underline">Teaching</span>
				</Heading>
				<Text>
					I will be teaching web development at{" "}
					<Link href="https://devhausleipzig.de/" variant="colored" isExternal>
						DevHaus Leipzig
					</Link>{" "}
					very soon!
				</Text>
			</VStack>
		</Box>
	</Center>
);

export default Index;
