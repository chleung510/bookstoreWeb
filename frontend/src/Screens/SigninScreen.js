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

  useEffect(() => {
     if (userInfo){
         // for directing user to home page. 
         props.history.push("/");
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
                    <Link to="/register" className="button secondary text-center">Create your Bookstore Account</Link>
                </li>
            </ul>
        </form>
    </div>
    
}

export default SigninScreen;
