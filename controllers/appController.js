module.exports = (() => {
    appRoute = {}
    
    appRoute.home = (req, res) => {
        res.render('listfilm', {
            layout: 'template-layout',
            message: "defaultmess",
            title: 'Dashboard'
        })
    }

    appRoute.upfilm = (req, res) => {
        res.render('upfilm', {
            layout: 'template-layout',
            title: 'Upload new film'
        })
    }
    
    return appRoute
})()
