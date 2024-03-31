module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addWatchTarget("./css/");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/img/");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
