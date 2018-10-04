import { PontoModel } from './esquemas';
import { Ponto } from './entidades';

export class PontoRepositorio {
    static async criarPonto(u: Ponto): Promise<Ponto> {
        let novo = await PontoModel.create(u);
        return novo.save();
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