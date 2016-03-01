'use strict';
var none = function() {},
    logger = {
      info: none,
      warn: none,
      error: none,
      debug: none,
      enable: function() {
        logger.info = logger.warn = logger.error = logger.debug = console.log.bind(console);
      }
    };
module.exports = logger;
