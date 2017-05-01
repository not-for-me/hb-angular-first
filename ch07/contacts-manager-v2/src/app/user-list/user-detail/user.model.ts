export type Sex = "F" | "M"  | "";

export class User {
  no: number;
  id: number;
  name: string;
  phoneNum: string;
  mail: string;
  birthDate: string;
  sex: Sex;

  constructor() {
    this.no = 0;
    this.name = '';
    this.phoneNum = '';
    this.mail = '';
    this.birthDate = '';
    this.sex = "";
  }
};
