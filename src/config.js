const REQUIRED_CONFIG_FIELDS = ['APP_NAME', 'APP_PORT', 'NODE_ENV'];

function checkConfigData(config) {
  if (config.NODE_ENV === 'test') {
    return;
  }

  REQUIRED_CONFIG_FIELDS.forEach((key) => {
    if (!(key in config) || config[key].length === 0) {
      throw new Error(`"${key}" is not defined`);
    }
  });
}

module.exports = (config = process.env) => {
  checkConfigData(config);

  return {
    loggerLevel: 'info',
    appPort: config.APP_PORT,
    appName: config.APP_NAME,
    nodeEnv: config.NODE_ENV,
  };
};
