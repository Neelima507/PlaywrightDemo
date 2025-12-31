import { test, expect } from '@playwright/test';

test('test get API @postAPI', async function ({ request }) {
    const auth = {
        "username": "admin",
        "password": "password123"
    }
    const response = await request.post("https://restful-booker.herokuapp.com/auth",
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: auth
        }

    )
    console.log(response.status())
    const respJson = await response.json()
    console.log(respJson)
    expect(respJson.token).not.toBeNull()
})