module.exports = function (req, res, next) {

    // User is allowed, proceed to the next policy, 
    // or if this is the last policy, the controller

    var parametros = req.allParams();
    if (parametros.id ==req.session.credencialSegura.id) {
        return next();
    }

    // User is not allowed
    // (default res.forbidden() behavior can be overridden in `config/403.js`)
    return res.forbidden('Usted no puede editar la informacion de otros Usuarios... largese porfavor!!!');
};