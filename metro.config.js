const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  config.resolver.alias = {
    "@assets": "./assets",
    "@color": "./src/color",
    "@components": "./src/components",
    "@utils": "./src/utils",
    "@redux": "./src/redux",
  };

  return config;
})();
