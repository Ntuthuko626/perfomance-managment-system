export class Users{
    public sId:number;
    public fName:string;
    public email: string;
    public phones: string;
    public pass: string;

    constructor(sId:number,fName:string,email: string,phones: string,pass: string){
        this.sId=sId;
        this.fName=fName;
        this.email=email;
        this.phones=phones;
        this.pass=pass;

}
}