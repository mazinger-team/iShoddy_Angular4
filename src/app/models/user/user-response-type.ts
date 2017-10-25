export class UserResponseType {
    private constructor(
        public _id: string,
        public email:string
    ) { }

    
    static fromJson(json: any): UserResponseType {
        return new UserResponseType(json._id,json.email);
      }
    
}