/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {

        // res.view(String: Nombre vista, Datos JSON)

        return res.view('vistas/home', {
            titulo: 'Inicio',
            numero: 1,
            mauricio: {
                nombre: 'Mauricio',
                cedula: 1718137159
            },
            usuarios: []
        })

    },
    crearUsuario: function (req, res) {

        return res.view('vistas/Usuario/crearUsuario')

    },
    listarUsuarios: function (req, res) {
        Usuario.find().exec(function (err, usuariosEncontrados) {
            if (err) {
                return res.view('vistas/Error', {
                    error: {
                        descripcion: "Hubo un problema cargano los usuarios",
                        rawError: err,
                        url: "/ListarUsuarios"
                    }
                });
            }
            return res.view('vistas/Usuario/listarUsuarios', {
                usuarios: usuariosEncontrados
            });
        })
    },
    error: function (req, res) {

        return res.view('vistas/Error', {
            error: {
                descripcion: "Usted esta por error aqui, dirijase a inicio",
                rawError: "RUTA EQUIVOCADA",
                url: "/Inicio"
            }
        })

    }

};