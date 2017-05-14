export class ScmBase {
  isUse: boolean;
  createdTime: string;
  updatedTime: string;

  constructor(isUse: boolean, createdTime: string, updatedTime: string) {
    this.isUse = isUse;
    this.createdTime = createdTime;
    this.updatedTime = updatedTime;
  }
}