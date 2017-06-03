(function(){

    const passport = require('passport');

    // Google strategy
    const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

    // My modules
    const User = require("../models/user");

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'https://availability-aedryan.herokuapp.com/auth/google/callback',
        passReqToCallback: true
    }, function(request, accessToken, refreshToken, profile, done){
        process.nextTick(() => {
            User.findOne({ 'google.id' : profile.id }, (err, user) => {
                if (err) {
                    done(err);
                } else if (user) {
                    done(null, user);
                } else {
                    user = new User();
                    
                    user.google.id = profile.id;
                    user.google.token = accessToken;
                    user.google.fullName = profile.name.givenName + ' ' + profile.name.familyName,
                    user.google.displayName = profile.displayName
                    user.google.photo = profile.photos[0].value
                    
                    user.save((err) => {
                        if (err) {
                            done(err);
                        } else {
                            done(null, user);
                        }
                    });
                }
            });
        });
    }));

    module.exports = passport;

})();