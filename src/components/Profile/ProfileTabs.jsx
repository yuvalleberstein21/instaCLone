import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'

const ProfileTabs = () => {
    return (
        <Flex
            w={"full"}
            justifyContent={"center"}
            gap={{ base: 4, sm: 10 }}
            textTransform={"bold"}
        >

            <Flex borderTop={"1px solid white"} alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsGrid3X3 />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>POSTS</Text>
            </Flex>

            <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsBookmark />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>SAVED</Text>
            </Flex>

            <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsSuitHeart fontWeight={"bold"} />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>LIKES</Text>
            </Flex>

        </Flex>
    )
}

export default ProfileTabs