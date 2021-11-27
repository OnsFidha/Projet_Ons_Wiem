import { Description } from "./description";

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
        public description:Description[]
    ){}
}
