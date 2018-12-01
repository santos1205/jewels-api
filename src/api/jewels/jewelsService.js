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

// api methods => loadTotals
Jewels.route('loadTotalJewels', (req, res, next) => {
    // let resultTotals = Jewels.aggregate([
    //     {$match: {_id: ObjectId(req)} }, 
    //     {$unwind: '$jewels'},     	
    //     {$group: {
    //         _id: null, 
    //         "total": {$sum: 1 }
    //     }},
    //     {$project: {_id:0}}
    // ])
    
    //let resultTotals = { totalJewels: 800 }
    //res.json({resultTotals})
    var userid = new ObjectID("5c02ee620bc2f60016a33ca2");
    Jewels.aggregate(
        {'$match': {'_id': userid} }, 
        {'$unwind': '$jewels'},     	
        {'$group': {
            '_id': null, 
            "total": {'$sum': 1 }
        }},
        {'$project': {'_id':0}},
        (error, value) => {
            if(error){
                res.status(500).json({errors: [error]})
            }else{
                res.json({value})
            }
        }
    )
})


module.exports = Jewels