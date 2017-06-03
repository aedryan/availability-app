(function(){
    
    module.exports = function(app, passport) {

        app.get('/auth/google', passport.authenticate('google', { scope : [ 
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/plus.profile.emails.read' 
        ] }));

        // handle the callback after facebook has authenticated the user
        app.get('/auth/google/callback', passport.authenticate('google', {
            successRedirect : '/home',
            failureRedirect : '/home'
        }));

        app.get('/auth/logout', (req, res) => {
            req.logout();
            res.redirect('/');
        });
        
    };

})();