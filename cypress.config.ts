const config: any = {
  e2e: {
    // include existing .cy.ts specs and legacy integration folder
    specPattern: ['cypress/**/*.cy.{js,ts}', 'cypress/integration/**/*.cy.{js,ts}'],
    supportFile: 'cypress/support/index.ts',
    videosFolder: 'cypress/videos',
    downloadsFolder: 'cypress/downloads',
    baseUrl: 'https://text-compare.netlify.app',
    setupNodeEvents(on, cfg) {
      // keep default behavior; add plugins here if needed
      return cfg;
    }
  }
};

export default config;
