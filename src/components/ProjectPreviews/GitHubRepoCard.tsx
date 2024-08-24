import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Link, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';

interface GitHubRepoCardProps {
    repo: string;
}

interface RepoData {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
}

const GitHubRepoCard: React.FC<GitHubRepoCardProps> = ({ repo }) => {
    const [repoData, setRepoData] = useState<RepoData | null>(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}`)
            .then(response => response.json())
            .then(data => setRepoData(data))
            .catch(error => console.error('Error fetching repo data:', error));
    }, [repo]);

    if (!repoData) return null;

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <VStack align="start" spacing={2}>
                <Heading size="md">{repoData.name}</Heading>
                <Text>{repoData.description}</Text>
                <HStack>
                    <Icon as={FaStar} />
                    <Text>{repoData.stargazers_count} stars</Text>
                    <Icon as={FaCodeBranch} />
                    <Text>{repoData.forks_count} forks</Text>
                </HStack>
                <Link href={repoData.html_url || `https://github.com/${repo}`} isExternal color="blue.500">
                    View on GitHub
                </Link>
            </VStack>
        </Box>
    );
};

export default GitHubRepoCard;