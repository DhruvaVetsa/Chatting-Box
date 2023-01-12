exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle : "Login Page"
    });
}

exports.getChat = (req, res, next) => {
    res.render('chat', {
        pageTitle : "Chat with the World!"
    });
}

exports.postChat = (req, res, next) => {
    res.render('chat', {
        pageTitle : "Chat with the World!",
        user_name : req.body.name_entered
    });
}