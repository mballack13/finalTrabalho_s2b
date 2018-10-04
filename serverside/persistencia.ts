import { PontoModel, TipoModel, UsuarioModel, VotoModel } from './esquemas';
import { Ponto, Tipo, Usuario, Voto } from './entidades';

export class UsuarioRepositorio {
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
}