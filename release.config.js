module.exports = {
  branches: ['master'],
  repositoryUrl: 'https://github.com/blackcalb/cicd-github',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/github',
      {
        assets: [
          { path: 'build.zip', label: 'Build' },
          { path: 'coverage.zip', label: 'Coverage' },
        ],
      },
    ],
  ],
};
