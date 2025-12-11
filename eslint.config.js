import starkAccessibilityReactNative from '@stark-lab-inc/stark-accessibility-react-native';

export default [
  starkAccessibilityReactNative.configs.all, // or .basic, .ios, .android
  {
    files: ['**/*.{js,jsx}'],
  },
];