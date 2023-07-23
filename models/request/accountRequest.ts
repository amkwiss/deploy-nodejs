import { versionMajorMinor } from "typescript";

export default interface AccountRequest {
  Name: string;
  LastName: string;
  ID_Std: string;
  Address: string;
  PhoneNo: string;
  GPA: number;
  Major: string
}
