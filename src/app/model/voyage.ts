export class Voyage {
    constructor(
        public img:string,
        public id:number,
        public destination:string,
        public continent :string,
        public dateAller: Date,
        public dateRetour: Date,
        public nbJ:number,
        public prix : number,
        public enPromo: boolean,
        public planning : string,
        public hotel : string,
        public etoile :number,
        public ville:string[]
    ){}
}
