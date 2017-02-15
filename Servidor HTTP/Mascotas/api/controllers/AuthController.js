/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Passwords = require('machinepack-passwords');

module.exports = {

    //validar si se envia parametros
    //buscar por correro al usuario
    //comparar el password
    //entregar la credencial

    login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.correo && parametros.password) {
            Usuario.findOne({
                correo: parametros.correo
            }).exec(function (err, UsuarioEncontrado) {
                if (err) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "Error inesperado del Servidor",
                            rawError: err,
                            url: "/Login"
                        }
                    });
                } else {
                    if (UsuarioEncontrado) {
                        Passwords.checkPassword({
                            passwordAttempt: parametros.password,
                            encryptedPassword: UsuarioEncontrado.password,
                        }).exec({
                            // An unexpected error occurred.
                            error: function (err) {
                                res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Error Inesperado",
                                        rawError: err,
                                        url: "/Login"
                                    }
                                });
                            },
                            // Password attempt does not match already-encrypted version
                            incorrect: function () {
                                res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Ingrese su password correctamente",
                                        rawError: "Password Incorrecto",
                                        url: "/Login"
                                    }
                                });
                            },
                            // OK.
                            success: function () {
                                req.session.credencialSegura = UsuarioEncontrado;

                                return res.view("vistas/home");
                            },
                        });
                    } else {
                        res.view('vistas/Error', {
                            error: {
                                desripcion: "No se encontro al Usuario",
                                rawError: "No existe Usuario",
                                url: "/Login"
                            }
                        });
                    }
                }
            })
        } else {
            res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos su correo y su password",
                    rawError: "No envia parametros",
                    url: "/Login"
                }
            });
        }
    },
    tieneSesion: function (req, res) {
        if (req.session.credencialSegura) {
            return res.ok("Si tiene la credencial Segura");
        } else {
            return res.forbidden();
        }
    },
    logout: function (req, res) {
        req.session.credencialSegura = undefined;
        return res.view("login");
      
    }

};