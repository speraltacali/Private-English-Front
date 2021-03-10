export interface Usuario{
    usuario : string ,
    password : string ,
    estado : boolean,
    eliminado : boolean,
    personaId : number,
    cargo : number
}

export interface Login{
    usuario : string ,
    password : string ,
    cargo: number
}