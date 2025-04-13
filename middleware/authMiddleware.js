// authMiddleware.js
const isLogined = (req, res, next) => {
  try {
    // Check if a session exists
    if (req.session.user_id) {
      return next(); // User is logged in, allow access
    }
    return res.redirect("/login"); // Redirect to login if not logged in
  } catch (error) {
    console.error("Error in isLogined middleware:", error);
    return res.redirect("/login");
  }
};

const isLogout = (req, res, next) => {
  try {
    // Check if session does not exist
    if (!req.session.user_id) {
      return next(); // User is not logged in, allow access to the route
    }
    return res.redirect("/"); // Redirect to home if already logged in
  } catch (error) {
    console.error("Error in isLogout middleware:", error);
    return res.redirect("/");
  }
};

module.exports = {
  isLogined,
  isLogout
};
