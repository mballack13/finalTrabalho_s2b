import { connect } from 'mongoose';
import { App } from './app';

import fs = require('fs');
import { Point } from './entities';
import { PointRepo } from './persistence';

function create(){
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
            linha = (data as string).split("\n");
            for (let i = 0; i < (linha.length - 1); i++) {
                dados = linha[i].split(";");
                console.log('#################   nova linha    ###########################');
                let p: Point = {
                    public : dados[0],
                    type : dados[1],
                    name : dados[2],
                    address : dados[3],
                    phone : dados[4],
                    latitude : dados[5],
                    longitude : dados[6],
                    link : dados[7],
                    specialties: dados[10]
                }
                //console.log(p);
                PointRepo.createPoint(p).catch(err => console.log(err + ' name: ' + p.name));
            }
        }).catch(erro => console.log(erro));
}
async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cli = await connect(url, { useNewUrlParser: true });
        console.log('Mongo conectado com sucesso');
        const myApp = new App();
        myApp.app.listen(80, () => {
            console.log("Server Running...");
        });
        
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}
main();
//create();