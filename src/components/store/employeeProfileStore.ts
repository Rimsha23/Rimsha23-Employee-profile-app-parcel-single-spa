import {makeObservable, observable, action } from "mobx";

class ProfileStore {
  profile = {
    name: 'Rimsha Malik',
    designation: 'Front-end Developer',
    reports_to: 'John Doe',
    role: 'Developer'
  };
constructor(){
  makeObservable(this,{
    profile: observable,
    updateProfileField: action
  })
}
updateProfileField(field, value){
    this.profile[field] = value;
  }
}

const profileStore = new ProfileStore();
export default profileStore;
