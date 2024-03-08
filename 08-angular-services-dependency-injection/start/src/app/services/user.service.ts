import { User } from "../Models/user.model";

export class UserService {
  users: User[] = [
    new User("Mary Jane", "Female", "Yearly", "Inactive"),
    new User("Mark Tyler", "Male", "Yearly", "Active"),
    new User("Steve Smith", "Male", "Monthly", "Active"),
  ];

  getAllUsers() {
    return this.users;
  }

  createUser(name: string, gender: string, subType: string, status: string) {
    let newUser = new User(name, gender, subType, status);
    this.users.push(newUser);
  }
}
