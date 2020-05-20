const { Strategy, ExtractJwt } = require('passport-jwt');
const config = require('config');
const User = require('../models/User');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get('jwt'),
};

module.exports = passport => {
  passport.use(
    new Strategy(options, async (payload, done) => {
      try {
        const user = await User.findById(payload.userId).select('email id');
        
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch(e) {
        console.log(e.message);
      }
    }),
  );
};
