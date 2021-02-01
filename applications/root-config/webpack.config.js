const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "react-mf";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    disableHtmlGeneration: true
  });

  return merge(
    defaultConfig,
    {
        externals: ["single-spa"],
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: "./src/index.html"
                }
            ])
        ]
    }
  );
};