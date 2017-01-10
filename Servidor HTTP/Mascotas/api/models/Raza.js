/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nombre:{
          type: 'string',
          enum:['Bulldog','Chihuahua','Pitbull'],
          required:true
      },
      //mascotas nombre plural del modelo a relacionarse
      mascotas:{
          //collection nombre de modelo en sails
          collection: 'mascota',
          // Via es el campo por el cual vamos a relacionar FOREIGN KEY
          via: 'idRaza'
      }
  }
};

