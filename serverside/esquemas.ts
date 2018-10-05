import { Ponto } from './entidades';
import { Document, model, Schema } from 'mongoose';

interface PontoDocument extends Ponto, Document {}

export const PontoModel = model<PontoDocument>('Ponto', new Schema({
    publico: { type: String, required: true, enum: ['Público', 'Privado', 'Público/Privado'] },
    tipo: { type: String, required: true, enum: ['Hospital', "PA"] },
    nome: { type: String, required: true, max: 100 },
    endereco: { type: String, required: true, max: 200 },
    telefone: { type: String, required: true, max: 15 },
    link: { type: String, max: 150 },
    especialidades: { type: String, required: true, max: 200 },
    latitude: { type: String, required: true, max: 40 },
    longitude: { type: String, required: true, max: 40 }
}), 'pontos');

/*
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


interface TipoDocument extends Tipo, mongoose.Document {}

export const TipoModel = mongoose.model<TipoDocument>('Tipo', new mongoose.Schema({
    categoria: { type: String, required: true, enum: ['Semáforo sonoro', 'Rebaixo na calçada', 'Selo de acessibilidade'] }
}), 'tipos');

interface VotoDocument extends Voto, mongoose.Document {}

export const VotoModel = mongoose.model<VotoDocument>('Voto', new mongoose.Schema({
    voto: { type: String, required: true, enum: ['Neutro', 'A favor', 'Contra'], default: 'Neutro' },
    ponto: { type: mongoose.SchemaTypes.ObjectId, ref: 'Ponto' }
}), 'votos');
*/