import React,{useContext, useRef} from 'react';
import classes from './ProfileForm.module.css';
import { Button } from 'react-bootstrap';
import AuthContext from '../../Auth/AuthContext/Auth-context';
import {useHistory} from 'react-router-dom';

function ProfileForm() {

  const history = useHistory();

  const newPasswordRef=useRef();
  const authCtx=useContext(AuthContext);

  const submitHandler=(e)=>{
    e.preventDefault();

    const enteredNewPassword=newPasswordRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD8DiWZ8uasEA9GxKPGTUNZka3xs2BPHFU',
    {
      method:'POST',
      body:JSON.stringify({
        idToken:authCtx.token,
        password:enteredNewPassword,
        returnSecureToken:true
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      if(res.ok){
        history.replace('/auth');
      }
      else{
        return res.json().then((data)=>{
          let errorMessage=data.error.message;
          throw new Error(errorMessage);
        })
      }
    }).then((data)=>{
      console.log(data);
    }
    ).catch((err)=>{
      alert(err.message);
    })

  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef}/>
      </div>
      <div className={classes.action}>
        <Button variant='primary' type='submit'>Change Password</Button>
      </div>
    </form>
  );
}
export default ProfileForm;
