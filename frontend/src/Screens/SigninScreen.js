import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function SigninScreen(props){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  // If there is a string in props.location.search, split the string with "=" and 
  // extract 2nd item in the array which is the shipping page in this case.
  // If it does not exist, it redirects back to home page.
  const redirect = props.location.search?props.location.search.split("=")[1]:'/';

  useEffect(() => {
      console.log(props);
      // If user logged in...
     if (userInfo){
         // for directing user to home page or shipping page. 
         // Based on the result in redirect.
         props.history.push(redirect);
     }
      return () => {
          //
      }
  }, [userInfo]) // to check if the state of userInfo changed, and run if statement when it changed.

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }

    return <div className="form">
        <form onSubmit={ submitHandler }>
            <ul className="form-container">
                <li>
                    <h2>Sign-in</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input type="email" name="email" id="email" onChange={ (e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={ (e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Submit</button>
                </li>
                <li>
                    New to Bookstore?
                </li>
                <li>
                    {/* If redirect is pointed to homepage, set redirect to register page.*/}
                    {/* If redirect is not pointed to homepage, redirect to register page, */}
                    {/* then set url as "register?redirect=redirect". */}

                    {/* The page will jump to shipping page which is the url parsed from */}
                    {/* props.location.search */}
                    <Link to={ redirect === "/" ? "register" :"register?redirect=" + redirect } className="button secondary text-center">Create your Bookstore Account</Link>
                </li>
            </ul>
        </form>
    </div>
    
}

export default SigninScreen;
