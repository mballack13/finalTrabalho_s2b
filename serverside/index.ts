import { connect } from 'mongoose';
import { app } from './app';

async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cli = await connect(url, { useNewUrlParser: true });
        console.log('Mongo conectado com sucesso');

        app.listen(80, () => console.log("Server Running..."));

        


        
        if (cli && cli.connection) {
            cli.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

main();