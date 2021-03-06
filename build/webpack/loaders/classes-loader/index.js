import loaderUtils from 'loader-utils';
module.exports = function () {};
module.exports.pitch = function (remainingRequest) {
  if (this.cacheable) this.cacheable();
  return [
    `// classes-loader: add classes names to tags from css-modules`,
    ``,
    `var content = require(${loaderUtils.stringifyRequest(this, `!!${remainingRequest}`)});`,
    `if(typeof content === 'string') content = [[module.id, content, '']];`,
    `if(content.locals) module.exports = content.locals;`,
  ].join(`\n`);
};
