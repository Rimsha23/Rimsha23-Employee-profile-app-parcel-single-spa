import { types } from "mobx-state-tree";

const ProfileModel = types
.model('User',{
    userId: types.string,
    userName: types.string,
    role: types.string,
    reportsTo: types.string,
    designation: types.string,
})
.actions((self) => ({
    editProfile(field,value){
        self[field] = value;
    }
}));

const profileStore = ProfileModel.create({
    userId : 'ENG-EMP-287',
    userName: 'Rimsha Malik',
    role: 'Developer',
    reportsTo: 'John Doe',
    designation: 'Front-end Developer'
});

export default profileStore;
