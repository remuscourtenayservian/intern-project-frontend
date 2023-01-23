import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Flex, View, Loader } from '@aws-amplify/ui-react'
import { ProfileCard } from "../ui-components"

const Studio = () => {

    const { user, logout, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <Loader size="large" />
        );
    }

    return (
        <View  
            as="div"
            ariaLabel="View example"
            backgroundColor="var(--amplify-colors-white)"
            borderRadius="6px"
            border="1px solid var(--amplify-colors-black)"
            boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
            color="var(--amplify-colors-blue-60)"
            height="4rem"
            maxWidth="100%"
            padding="1rem"
            width="20rem"
        >
            <Flex
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                alignContent="flex-start"
                wrap="nowrap"
                gap="0rem"
            >
                <ProfileCard
                    username={user.name}
                    role={user.email}
                    image={user.picture}
                    buttonEvent={logout}
                />
            </Flex>
        </View>
    );
}

export default withAuthenticationRequired(Studio);