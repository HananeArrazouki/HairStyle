export interface UserLogin{
          identifier:string,
          password:string
      }
      
export interface UserRegister{
          email:string,
          password:string,
          username:string,
          firstName: string,
          lastName: string
}

export interface User{
          id: number;
          docId?:string;
          username:string;
          email:string;
          provider:string;
          token:string,
          firstName:string,
          lastName:string
}