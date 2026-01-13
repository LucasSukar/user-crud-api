exports.csrfError = (err, req, res, next) => {
    if(err && err.code == 'EBADCSRFTOKEN'){
        return res.send('BAD csrf')
    }
}

exports.csrfMidd = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}
