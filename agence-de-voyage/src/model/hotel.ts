export class Hotel {
    constructor(
        public id: number,
        public nom: string,
        public image: any,
        public lieu: string,
        public prix: number,
        public nbEtoiles: number,
        public promotion: boolean,
        public description?: string,
        public telephone?: number,
        public adresse?: string,
        public internet?: boolean,
        public piscine?: boolean,
        public Parking?: boolean,
        public images?: string[]) { }
}
