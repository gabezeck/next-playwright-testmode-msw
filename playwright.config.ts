import { defineConfig, devices } from 'next/experimental/testmode/playwright'

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  retries: 0,
  use: {
    baseURL: 'http://localhost:3000/'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: 'npm run dev -- --experimental-test-proxy',
    url: 'http://localhost:3000'
  }
})
