module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            "@assets": "./assets",
            "@colors": "./src/styles/colors",
            "@components": "./src/components",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
