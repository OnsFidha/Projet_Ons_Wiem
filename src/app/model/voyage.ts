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
<<<<<<< HEAD
        public villes:string[]
=======
        public ville:string[]
>>>>>>> 8b2831d489560dab9c9bfdc429c43625c51022b2
    ){}
}
