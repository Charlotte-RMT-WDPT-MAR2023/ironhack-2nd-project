const { Router } = require("express");
const router = new Router();

router.get("/event", (req, res) => res.render("users/user-event"));
router.get("/suggestions", (req, res) => res.render("users/user-suggestions"));
router.get("/rsvp", (req, res) => res.render("guests/rsvp"));

module.exports = router;