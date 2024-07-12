import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})
 
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/index.tsx',
  ],
}
 
export default createJestConfig(config)