import ProfileComponent from "./ProfileComponent";
import UpdateComponent from "./UpdateComponent";
import DestroyComponent from "./DestroyComponent";
import UsersListComponent from "./UsersListComponent";

export default [
  { path: '/profile', name: 'Profile', component: ProfileComponent },
  { path: '/update', name: 'Update', component: UpdateComponent },
  { path: '/destroy', name: 'Destroy', component: DestroyComponent },
  { path: '/users/user', name: 'UsersList', component: UsersListComponent },
]
