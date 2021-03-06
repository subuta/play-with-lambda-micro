// Config for base test (will runs tests within /src)
module.exports = {
  modulePaths: [
    '<rootDir>'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/tests/integration/'
  ],
  testMatch: [
    '**/?(*.)+(spec).[jt]s?(x)'
  ],
  coverageReporters: [
    'text-summary',
    'lcov'
  ],
  setupFiles: [
    '<rootDir>/tests/setup.js'
  ]
}
