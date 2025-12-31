import { test, expect } from '@playwright/test';

test('test get API @getAPI', async function ({ request }) {
    const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1")
    const respJson = await resp.json()
    console.log(respJson)
    const respStatus = await resp.status()
    console.log(respStatus)
    expect(respStatus).toBe(200)
    const respStatusText = await resp.statusText()
    console.log(respStatusText)
    expect(respStatusText).toBe("OK")
    expect(resp.ok()).toBeTruthy()



})