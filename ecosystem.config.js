module.exports = {
  apps: [
    {
      name: 'hub',
      script: 'dist/main.js',
      watch: false,
      autorestart: true,
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: process.env.NODE_ENV,
      },
      out_file: '/dev/null',
      error_file: 'dev/null',
    },
  ],
};
