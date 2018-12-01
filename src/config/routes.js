const express = require('express')



module.exports = function(server) {
    // base URL
    const router = express.Router()
    server.use('/api', router)
    // Jewels service routes
    const JewelsService = require('../api/jewels/jewelsService')
    JewelsService.register(router, '/jewels')    

    
}