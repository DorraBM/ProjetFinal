export class Commentaire {
    constructor(public nom: string,
        public date: Date,
        public texte: string,
        public nbEtoiles: number,
        public email: string) 
    { }
}
