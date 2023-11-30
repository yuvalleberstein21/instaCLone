import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading && [0, 1, 2, 3].map((_, idx) => (
                <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                    <Flex gap={2}>
                        <SkeletonCircle size={10} />
                        <VStack gap={2} alignItems={"flex-start"}>
                            <Skeleton height={'10px'} w={"200px"} />
                            <Skeleton height={'10px'} w={"200px"} />
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"500px"}>contents wrapped</Box>

                    </Skeleton>
                </VStack>
            ))}
            {!isLoading && (
                <>
                    <FeedPost
                        username="yuval.programmer_"
                        img="/img1.png"
                        avatar="/img1.png"
                    />
                    <FeedPost
                        username="messi.234"
                        img="/img2.png"
                        avatar="/img2.png"
                    />
                    <FeedPost
                        username="john.doe"
                        img="/img3.png"
                        avatar="/img3.png"
                    />
                    <FeedPost
                        username="leber.idf"
                        img="/img4.png"
                        avatar="/img4.png"
                    />
                </>
            )}
        </Container>
    )
}

export default FeedPosts