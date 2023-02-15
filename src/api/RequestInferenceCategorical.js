import { Auth } from "aws-amplify"

export async function requestInferenceCategorical(inp) {
    const tokens = await Auth.currentSession()

    const response = await fetch(`https://uaj6id41c6.execute-api.ap-southeast-2.amazonaws.com/infra-dev/api/model`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokens.getIdToken().getJwtToken()}`
            },
            body: JSON.stringify({"input": inp, "model": "categorical" }) // next one is categorical
        }
    );
    return await response.json()
}