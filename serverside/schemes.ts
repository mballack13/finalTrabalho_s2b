import { Point } from './entities';
import { Document, model, Schema } from 'mongoose';

interface PointDocument extends Point, Document {}

export const PointModel = model<PointDocument>('Point', new Schema({
    public: { type: String, required: true, enum: ['Público', 'Privado', 'Público/Privado'] },
    type: { type: String, required: true, enum: ['Hospital', "PA"] },
    name: { type: String, required: true, max: 100 },
    address: { type: String, required: true, max: 200 },
    phone: { type: String, required: true, max: 15 },
    link: { type: String, max: 150 },
    specialties: { type: String, required: true, max: 200 },
    latitude: { type: String, required: true, max: 40 },
    longitude: { type: String, required: true, max: 40 }
}), 'pontos');
