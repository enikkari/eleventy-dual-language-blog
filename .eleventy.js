module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addWatchTarget("./css/");
  eleventyConfig.addPassthroughCopy("./img");
  eleventyConfig.addWatchTarget("./img/");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};