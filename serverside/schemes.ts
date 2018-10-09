import { Point } from './entities';
import { Document, model, Schema } from 'mongoose';

interface PointDocument extends Point, Document {}

export const PointModel = model<PointDocument>('Point', new Schema({
    public: { type: String, required: true, enum: ['P�blico', 'Privado', 'P�blico/Privado'] },
    type: { type: String, required: true, enum: ['Hospital', "PA"] },
    name: { type: String, required: true, max: 100 },
    address: { type: String, required: true, max: 200 },
    fone: { type: String, required: true, max: 15 },
    link: { type: String, max: 150 },
    specialties: { type: String, required: true, max: 200 },
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