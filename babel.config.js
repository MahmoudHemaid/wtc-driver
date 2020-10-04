module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app/components': './src/components',
          '@app/constants': './src/constants',
          '@app/screens': './src/screens',
          '@app/hooks': './src/hooks',
          '@app/navigation': './src/navigation',
          '@app/helpers': './src/helpers',
          '@app/config': './src/config',
          '@app/redux': './src/redux',
          '@app/utils': './src/utils',
        },
      },
    ],
  ],
};
