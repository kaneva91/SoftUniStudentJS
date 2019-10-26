/* module.exports = {
    development: {
        port: process.env.PORT || 3000
    },
    production: {}
}; */

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://localhost:27017/softuni',
        cookie: 'auth-cookie'
    },
    production: {}
};

module.exports = config[env];