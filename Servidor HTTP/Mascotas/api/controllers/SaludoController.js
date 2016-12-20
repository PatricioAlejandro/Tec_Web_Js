/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hola: function(req,res){
        res.send('hola');
    },
    adios: function(req,res){
        res.send('adios');
    },
    hora: function(req,res){
        res.send('hora');
    }
};

