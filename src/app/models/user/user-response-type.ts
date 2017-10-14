export class UserResponseType {
    private constructor(
        public success: boolean
    ) { }

    
    static fromJson(json: any): UserResponseType {
        return new UserResponseType(json.success);
      }
    
}