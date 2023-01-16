import { VStack, Image, Text, Center, Heading } from 'native-base'

import LogoSVG from '@assets/logo.svg'

import BackgroundImg from '@assets/background.png'

export function Signin() {
    return (
        <VStack flex={1} bg="gray.700">
            <Image
                source={BackgroundImg}
                alt="Pessoas treinando spinner na academia"
                resizeMode="contain"
                position="absolute"
            />

            <Center my={24}>
                <LogoSVG />

                <Text color="gray.100" fontSize="sm">
                    Treine sua mente e o seu corpo
                </Text>
            </Center>


            <Center>

            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                Acesse sua conta
            </Heading>

            </Center>



        </VStack>
    )
}