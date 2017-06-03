(function(){

    // My modules
    const User = require("../models/user");
    const Week = require("../models/week");

    module.exports = function(app) {

        // Gets the username if authenticated.  Otherwise an empty string.
        app.get('/db/user', (req, res) => {
            if (req.isAuthenticated()) {
                User.findOne({"google.id": req.user.google.id}, (err, user) => {
                    if (err) {
                        console.error('Error finding user by ID.', req.user.google.id, err)
                        res.status(503).end();
                    } else if (user) {
                        res.status(200).json(user.toJSON());
                    } else {
                        res.status(404).end();
                    }
                });
            } else {
                res.end();
            }
        });

        // Gets the username if authenticated.  Otherwise an empty string.
        app.get('/db/user/:id', (req, res) => {
            User.findById(req.params.id, (err, user) => {
                if (err) {
                    console.error('Error finding user by ID.', req.params.id, err)
                    res.status(503).end();
                } else if (user) {
                    res.status(200).json(user.toJSON());
                } else {
                    res.status(404).end();
                }
            });
        });

        app.get('/db/week/:week', (req, res) => {
            Week.findOne({ "number": req.params.week }, (err, week) => {
                if (err) {
                    console.error('Error finding week.', req.params.week, err)
                    res.status(503).end();
                } else if (!week) {
                    let newWeek = new Week()

                    newWeek.number = req.params.week;
                    newWeek.save((err, week) => {
                        if (err) {
                            console.error('Error creating new poll.', req.body, err)
                            res.status(503).end();
                        } else {
                            res.status(200).json(week.toJSON());
                        }
                    });
                } else {
                    res.status(200).json(week.toJSON());
                }
            });
        });

        app.post('/db/update/:week/player', (req, res) => {
            if (req.isAuthenticated()) {
                Week.findOne({ "number": req.params.week }, (err, oldWeek) => {
                    if (err || !oldWeek) {
                        console.error('Error finding week.', req.params.week, err)
                        res.status(503).end();
                    } else {
                        let newUser = {
                            name: req.user.google.displayName,
                            photo: req.user.google.photo,
                            id: req.user.google.id
                        };
                        let index;

                        if (oldWeek[req.body.day].find((user, i) => {
                            if (newUser.id === user.id) {
                                index = i;
                                return true;
                            }
                        })) {
                            oldWeek[req.body.day].splice(index, 1);
                        } else {
                            oldWeek[req.body.day].push(newUser);
                        }
                        
                        oldWeek.save((err, newWeek) => {
                            if (err) {
                                console.error('Error creating new poll.', req.body, err)
                                res.status(503).end();
                            } else {
                                res.status(200).json(newWeek.toJSON());
                            }
                        });
                    }
                });
            } else {
                res.end();
            }
        });
        
    };

})();