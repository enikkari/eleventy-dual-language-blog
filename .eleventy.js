let Nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
	let nunjucksEnvironment = new Nunjucks.Environment(
		new Nunjucks.FileSystemLoader("_includes")
	);

	eleventyConfig.setLibrary("njk", nunjucksEnvironment);
};

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
