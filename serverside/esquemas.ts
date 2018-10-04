import * as mongoose from 'mongoose';
import { Usuario, Ponto, Tipo, Voto} from './entidades';

interface UsuarioDocument extends Usuario, mongoose.Document {}

export const UsuarioModel = mongoose.model<UsuarioDocument>('Usuario', new mongoose.Schema({
    nome: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
    senha: { type: String, required: true, max: 40 },
    telefone: { type: String, required: true, max: 50 },
    visual: { type: Boolean, default: false },
    fisica: { type: Boolean, default: false },
    auditiva: { type: Boolean, default: false },
    mental: { type: Boolean, default: false },
    votoNoPonto: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Votos'}]
}), 'usuarios');

interface PontoDocument extends Ponto, mongoose.Document {}

export const PontoModel = mongoose.model<PontoDocument>('Ponto', new mongoose.Schema({
    titulo: { type: String, required: true, max: 100 },
    descricao: { type: String, max: 200 },
    latitude: { type: String, required: true, max: 40 },
    longitude: { type: String, required: true, max: 40 },
    data: { type: Date, default: Date.now },
    tipo: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Tipo', required: true }],
    autor: { type: mongoose.SchemaTypes.ObjectId, ref: 'Usuario' },
    reputacao: { type: Number, default: 0 },
}), 'pontos');

interface TipoDocument extends Tipo, mongoose.Document {}

export const TipoModel = mongoose.model<TipoDocument>('Tipo', new mongoose.Schema({
    categoria: { type: String, required: true, enum: ['Semáforo sonoro', 'Rebaixo na calçada', 'Selo de acessibilidade'] }
}), 'tipos');

interface VotoDocument extends Voto, mongoose.Document {}

export const VotoModel = mongoose.model<VotoDocument>('Voto', new mongoose.Schema({
    voto: { type: String, required: true, enum: ['Neutro', 'A favor', 'Contra'], default: 'Neutro' },
    ponto: { type: mongoose.SchemaTypes.ObjectId, ref: 'Ponto' }
}), 'votos');
