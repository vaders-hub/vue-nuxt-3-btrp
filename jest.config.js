// ./jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|vue)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|vue)|**/__tests__/*.(js|jsx|ts|vue))',
  ],
  moduleFileExtensions: ['js', 'jsx', 'mjs', 'ts', 'vue'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '.*\\.(vue)$': '@vue/vue3-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(nuxt3|unenv))'],
  setupFiles: ['./src/test-utils/global-test-utils-config.ts'],
};
