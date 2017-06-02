(function(){
    
    const path = require('path');

    module.exports = function(app) {

        // Always load index.html. React app routes the rest of the pages.
        app.get(/^(?!\/auth|db\/)/, (req, res) => {
            const indexPath = path.resolve(__dirname, '../..', 'public', 'index.html');

            if (/\/home/.test(req.path)) {
                res.sendFile(indexPath);
            } else {
                if (req.isAuthenticated()) {
                    res.sendFile(indexPath);
                } else {
                    res.status(401).redirect('/');
                }
            }
        });

    };

})();