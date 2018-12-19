const Jewels = require('./jewelsMap')

Jewels.methods(['get', 'post', 'put', 'delete'])
// new: true - return new data update
// runValidators: true - validations on updates
Jewels.updateOptions({new: true, runValidators: true})

// api methods => count kits
Jewels.route('countKits', (req, res, next) => {
    Jewels.count((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({total:value})
        }
    })
})

// api methods => firstElem
Jewels.route('firstElem', (req, res, next) => {
    Jewels.findOne((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = Jewels