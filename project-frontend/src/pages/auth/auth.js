import LoginComponent from  "./LoginComponent"
import RegistrationComponent from  "./RegistrationComponent"
import VerifyComponent from "./VerifyComponent";

export default [
  { path: '/login', name: 'Login', component: LoginComponent},
  { path: '/registration', name: 'Registration', component: RegistrationComponent },
  { path: '/verify', name: 'Verify', component: VerifyComponent },
]
