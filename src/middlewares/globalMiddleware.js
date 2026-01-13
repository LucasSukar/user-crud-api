module.exports = (req, res, next) => {
    res.locals.localVariavel = 'local variavel'
    console.log()
    next()
}
