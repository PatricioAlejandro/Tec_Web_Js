/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    //acceder al siguiente metodo /Usuario/crearUsuario


    crearUsuario: function (req, res) {
        //guardar todos los parametros en una variable parametros
        var parametros = req.allParams();
        console.log(parametros);
        //
        if (req.method == 'POST') {
            if (parametros.nombres && parametros.apellidos) {
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (err, usuarioCreado) {
                    if (err) {
                        return res.serverError(err);
                    }
                    sails.log.info(usuarioCreado);
                    return res.ok(usuarioCreado); //200
                });
            } else {
                return res.badRequest('No envia todos los parametros');
            }
        } else {
            return res.badRequest('Metodo invalido');
        }
    }

};