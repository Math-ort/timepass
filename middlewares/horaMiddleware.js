const horaMiddleware = (req, res, next) => {
    const now = new Date();
    req.horaActual = {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
};
next()
};
module.exports = horaMiddleware;

