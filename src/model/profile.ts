export default class Profile {
  token!: string;
  firstname!: string;
  lastname!: string;
  phone!: string;
  address!: string;
  profilepicture!: string;
  profilePictureExternal!: string;
  createdAt!: number;

  fromJson(element: any) {
    this.token = element.token;
    this.firstname = element.data.profileDetails.firstname;
    this.lastname = element.data.profileDetails.lastname;
    this.phone = element.data.profileDetails.phone;
    this.address = element.data.profileDetails.address;
    this.profilepicture = element.data.profileDetails.profilePicture;
    this.profilePictureExternal =
      element.data.profileDetails.profilePictureExternal;
    this.createdAt = Date.now();
  }
}
