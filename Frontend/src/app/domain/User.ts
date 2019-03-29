import {Roles} from './Roles';



export class User  {
  id?: any;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  roles?: Roles;

  constructor(  id?: any,
  name?: string,
  username?: string,
  email?: string,
  password?: string,
  roles?: Roles,){

    this.id= id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }


}
