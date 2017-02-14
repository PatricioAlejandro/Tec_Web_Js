/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nombres:{
          type:'string',
          minLength:5,
          required:true
      },
      apellidos:{
          type:'string',
          minLength:5,
          required:true
      },
      correo:{
          type:'string',
          email:true,
          defaultsTo:'correo@invalido.com'
      },
      password:{
          type:'string',
          defaultsTo:'123456'
      }
  },
    beforeCreate: function (values, cb){
        sails.log.info(values);
        //cb(12312312)//error
        //cb()//ok
    }
    
};











