import * as usersDao from "./users-dao.js";


const AuthController = (app) => {
    const register = async (req, res) => { const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao.findUserByUsername(username);
        if (user) {
            res.sendStatus(409);
            return;
        }
        const newUser = await usersDao.createUser(req.body);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };
    const login    = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao.findUserByUsername(username);
        if (user && user.password == password) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };
    const profile  = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.json(null);
            return;
        }
        const username = currentUser.username;
        const user = await usersDao.findUserByUsername(username);
        if (!user) {
            res.sendStatus(404);
            return;
        }
        res.json(user);
    };

    const publicProfile  = async (req, res) => {
        const username = req.params.pid;
        const user = await usersDao.findUserByUsername(username);
        if (!user) {
            res.sendStatus(404);
            return;
        }
        res.json(user);
    };

    const logout   = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };
    const update   = async (req, res) => {
        const userIDToUpdate = req.params.uid;
        const updates = req.body;
        const status = await usersDao.updateUser(userIDToUpdate, updates);
        res.json(status);
    };

    const getCriticsForBook = async (req, res) => {
        const bookID = req.params.bid;
        const status = await usersDao.findUsersByBookRec(bookID);
        res.json(status);
    };

    const getAllCritics = async (req, res) => {
        const status = await usersDao.findAllCritics();
        res.json(status);
    };

    app.post("/api/users/register", register);
    app.post("/api/users/login",    login);
    app.post("/api/users/profile",  profile);
    app.post("/api/users/profile/:pid",   publicProfile);
    app.post("/api/users/logout",   logout);
    app.put ("/api/users/:uid",          update);
    app.get("/api/users/critics/:bid", getCriticsForBook);
    app.get("/api/users/critics", getAllCritics);
};
export default AuthController;