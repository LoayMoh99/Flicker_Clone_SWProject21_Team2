const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const router = express.Router()

const specs = swaggerJsdoc({
    definition: {
        info: {
            title: 'Dropoid API specification',
            version: '1.0.0',
            host: 'localhost:8080',
            basePath: '/api/v1',
        },
    },
    apis: ['src/routes/v1/*.js'],
})

router.use('/', swaggerUi.serve)
router.route('/').get(
    swaggerUi.setup(specs, {
        explorer: true,
    })
)

module.exports = router
