export class User{
    constructor(
        public id:number,
        public fullName:string,
        public email:string,
        public phoneNumber:string,
        public street:string,
        public city:string,
        public state:string,
        public postalCode:string,
        public interstingIn:string,
        public message:string,
        public subscribe:boolean
    ){}
}