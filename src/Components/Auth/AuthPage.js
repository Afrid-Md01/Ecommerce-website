import { useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AuthPage.module.css";
import AuthContext from "../Auth/AuthContext/Auth-context";

function AuthPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    setIsLoading(true);

    let url;
    if (isLogin) {
      url=  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8DiWZ8uasEA9GxKPGTUNZka3xs2BPHFU";
    } else {
      url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8DiWZ8uasEA9GxKPGTUNZka3xs2BPHFU";
    }
      fetch(url,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "appliction/json",
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = data.error.message;
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const email = data.email.replace(/[@.]/g, "");
          authCtx.login(data.idToken, email);
          history.replace('/store');
          console.log(data);
        })
        .catch((err) => {
          alert(err.message);
        });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Sign in" : "Sign up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button type="submit">
              {isLogin ? "Log in" : "create new account"}
            </button>
          )}
          {isLoading && <p>Sending request...</p>}
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}{" "}
          </button>
        </div>
      </form>
    </section>
  );
}
export default AuthPage;
