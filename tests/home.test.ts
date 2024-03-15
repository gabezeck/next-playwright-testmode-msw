import { HttpResponse, expect, http, test } from 'next/experimental/testmode/playwright/msw'

test.describe('Home page', () => {
  test('should display a cat fact', async ({ page, msw }) => {
    msw.use(
      http.get('https://catfact.ninja/fact', () => {
        return HttpResponse.json({
          fact: 'Cats are the best!'
        })
      })
    )

    await page.goto('/')
    const catFact = await page.textContent('p')
    expect(catFact).toContain('Cats are the best!')
  })
})
