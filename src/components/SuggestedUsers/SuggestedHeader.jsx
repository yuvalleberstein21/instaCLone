import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';

const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name='As a programmer' size={"lg"} src='/profilepic.png' />
                <Text fontSize={12} fontWeight={"bold"}>
                    yuval.programmer
                </Text>
            </Flex>
            <Link
                to={"/auth"}
                as={RouterLink}
                fontSize={14}
                fontWeight={"medium"}
                color={"blue.400"}
                style={{ textDecoration: "none" }}
                cursor={"pointer"}
            >
                Logout
            </Link>
        </Flex>
    )
}

export default SuggestedHeader