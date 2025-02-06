const errorResponse = require('../utils/errorResponse')

const errorHandler = (err, req, res, next){
    let err = {...err}
    err.message = err.message

    //mongoose cast Error
    if(err.name === 'castError'){
        const message = 'Resources Not found'
        error = new errorResponse(message, 404)
    }
}