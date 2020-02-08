module.exports = {
    presets: [
      [
        '@babel/env',
        {
          modules: false,
        },
      ],
      '@babel/react',
    ],
    plugins: ["babel-plugin-styled-components"],
    env: {
      test: {
        presets: [
          [
            '@babel/env',
            {
              targets: { node: 'current' },
            },
          ],
          '@babel/react',
        ],
      },
    },
  };