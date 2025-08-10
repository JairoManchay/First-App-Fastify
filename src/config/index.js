const loadEnvironmentVariable = (envName) => {
    if(process.env[envName]){
        return process.env[envName];
    }

    throw new Error(`Environment variable ${envName} is not set`);
}

module.exports = {
    database_uri: loadEnvironmentVariable('POSTGRES_URI')
}