/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    home: function (req, res) {
        //res.view(String: nombre vista, datos json)
        return res.view('vistas/home', {
            titulo: 'Inicio',
            numero: 1,
            pato: {
                nombre: 'Patricio',
                cedula: 1003971536
            }
        })
    }
};