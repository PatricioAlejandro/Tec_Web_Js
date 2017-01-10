/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    //acceder al siguiente metodo /Usuario/crearUsuario
    crearUsuario: function (req, res) {
        Usuario.create({
            name: 'Juan'
        }).exec(function (err, juan) {
            if (err) {
                return res.serverError(err);
            }

            sails.log('Finn\'s id is:', finn.id);
            return res.ok();
        });
    }

};