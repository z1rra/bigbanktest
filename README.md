On my local machine I ran the tests using Ubuntu 24.04 GUI running via WSL.
Framework used: https://codecept.io/ 

Requirements for the environment:

I ran using npm version 9.2.0.

Playwright could need an update. Run `sudo npx playwright install-deps` if prompted.

If you don't have mocha, run `npm i mochawesome`

firefox browser installed

---

All the tests are in a single file. To run them, use:
`npx codeceptjs run --mochawesome`

Test report is generated into `/output/mochawesome.html`
