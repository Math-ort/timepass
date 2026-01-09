const validarHora = (req, res, next) => {
    const hora = req.horaActual.horas;

    if(horaActual >= 12 && hora <24) {
        next();

} else {
    const mensaje = 'Acceso solo disponible despues de las 12:00';
    return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
}
};
module.exports = validarHora