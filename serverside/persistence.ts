import { PointModel } from './schemes';
import { Point } from './entities';
import { createSecureServer } from 'http2';

export class PointRepo {
    static async createPoint(p: Point): Promise<Point> {
        let newP = await PointModel.create(p);
        console.log('create '+p.name)
        return newP.save();
    }
    static async all(): Promise<Point[]> {
        let docs = await PointModel.find().lean().exec();
        return docs;
    }
    static async searchName(t: string): Promise<Point[]> {
        let docs = await PointModel.find({'name': new RegExp(t, 'i')}).exec();
        return docs;
    }
    static async searchSpecialties(t: string): Promise<Point[]> {
        let docs = await PointModel.find({'specialties': new RegExp(t, 'i')}).exec();
        return docs;
    }
}

/*export class UsuarioRepositorio {
    static async criarUsuario(u: Usuario): Promise<Usuario> {
        let novo = await UsuarioModel.create(u);
        return novo.save();
    }
    static async login(e: string, s: string): Promise<Usuario> {
        let ret = await UsuarioModel.findOne({email: e}).exec();
        if(ret){
            if(ret.senha == s){
                return {msg: }
            }
        }
    }
}

export class LivroRepositorio {
    static async criarLivro(livro: Livro): Promise<Livro> {
        let novoLivro = await LivroModel.create(livro);
        return novoLivro.save();
    }
}*/