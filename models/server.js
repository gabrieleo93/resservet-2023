const express = require('express'); 
var cors = require('cors');
class Server{
    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.usuariosPath = ('/api/usuarios');

        //MIDDLEWARES
        this.middleware();

        //rutas app
        this.routes();
    }
    middleware(){
        //cors
        this.app.use(cors());

        // lectura y parseo  del body
        this.app.use(express.json())
        //directorio publico
        this.app.use(express.static('public'));
    }
    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuariosRut'));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Server running in a port', this.port);
        });
    }

}

module.exports = Server