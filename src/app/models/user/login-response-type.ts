export class LoginResponseType {
    private constructor(
        public _id: string,
        public email:string
    ) { }

    
    static fromJson(json: any): LoginResponseType {
        return new LoginResponseType(json._id, json.email);
      }
    
}