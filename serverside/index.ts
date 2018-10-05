import { connect } from 'mongoose';
import { app } from './app';

async function inicializar() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Mongo conectado com sucesso');

        app.listen(80, () => console.log("Server Running..."));

        


        
        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

inicializar();