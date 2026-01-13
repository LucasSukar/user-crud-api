exports.homePage = (req,res) => {
    res.render('index', { 
        titulo: 'oi',
        numeros: [1, 2, 3, 4, 5]
    })
}
exports.homePost = (req,res) => {
    res.send('oi do post')
}