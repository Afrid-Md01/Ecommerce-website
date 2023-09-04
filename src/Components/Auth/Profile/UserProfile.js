import React from 'react';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import NavBar from '../../Home/NavBar_And_Generics/NavBar';
function UserProfile(){
    return(
        <React.Fragment>
            <NavBar/>
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm/>
        </section>
        </React.Fragment>
    )
}
export default UserProfile;