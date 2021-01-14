const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb://localhost:27017/greendb',
  stripe_connect_test_client_id: 'acct_1I8khNA9mT3cLMmE',
  stripe_test_secret_key: 'sk_test_51I8khNA9mT3cLMmE13gnkqg7VZvAoCQPNC1lBU8apKyvD03gCqAOKXcc0zhYyi07gHS9a7po18EgwTsGqSVQzO7X001jHLOsfE',
  stripe_test_api_key: 'pk_test_51I8khNA9mT3cLMmE7uQvtwt8NV4dImH99cBM8Z7NJq5zf3QeWNX6i4UzfrLsM1o6xxE5YVftlX7JNdMJP7hfcTo500ABEOkyuP'
}

export default config
