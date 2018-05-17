module.exports =
  process.env.NODE_ENV === 'production'
    ? require('./storeConfig/configureStore.prod')
    : require('./storeConfig/configureStore.dev');
