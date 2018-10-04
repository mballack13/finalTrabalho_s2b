export interface Ponto {
    titulo: string,
    descricao: string,
    latitude: string,
    longitude: string,
    data: Date,
    tipo: Tipo[],
    autor: Usuario,
    reputacao: number
}
export interface Usuario {
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    visual: boolean,
    fisica: boolean,
    auditiva: boolean,
    mental: boolean,
    votoNoPonto: Voto[]
}
export interface Voto {
    ponto: Ponto,
    voto: string
}
export interface Tipo {
    categoria: string
}