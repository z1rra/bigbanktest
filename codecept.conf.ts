import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'firefox',
      url: 'https://taotlus.bigbank.ee',
      show: true
    }
  },
  include: {
    I: './steps_file',
    modalWindowPage: "./pages/modalWindow.ts"
  },
  mocha: {
    reporterOptions: {
      reportDir: './output'
    }
  },
  name: 'bigbank'
}