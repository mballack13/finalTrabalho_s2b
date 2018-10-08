import { connect } from 'mongoose';
import { app } from './app';

import fs = require('fs');
import { Point } from './entities';
/*var myParser:csv.Parser = csv('./doctorpoa.csv',{delimiter: ','}, function(data, err) {
    fs.createReadStream(__dirname+'/fs_read.csv').pipe(myParser)._read;
}) as csv.Parser;
*/
require('fs');
function fopen (path: string) {
    var fileContent;

    return new Promise(function(resolve) {
        fileContent = fs.readFileSync(path, {encoding: 'utf-8'});
        resolve(fileContent);
    });
}
let linha: string[];
let dados: string[];
let pontos: Point[];
fopen('./doctorpoa.csv')
    .then( data => {
        linha = (data as string).split("/n");
        for (let i = 1; i < linha.length; i++) {
            dados = linha[i].split(";");
            let p: Point = {
                public : dados[0],
                type : dados[1],
                name : dados[3],
                address : dados[4],
                fone : dados[5],
                latitude : dados[6],
                longitude : dados[7],
                link : dados[8],
                specialties: dados[11]
            }
            console.log(p);
        }
    }).catch(erro => console.log(erro));

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