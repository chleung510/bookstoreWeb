import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props){

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();
  // If there is a string in props.location.search, split the string with "=" and 
  // extract 2nd item in the array which is the shipping page in this case.
  // If it does not exist, it redirects back to home page.
  const redirect = props.location.search?props.location.search.split("=")[1]:'/';

  useEffect(() => {
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
    dispatch(register(name, email, password));
  }

    return <div className="form">
        <form onSubmit={ submitHandler }>
            <ul className="form-container">
                <li>
                    <h2>Create account</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="name" name="name" id="name" onChange={ (e) => setName(e.target.value)}></input>
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
                    <label htmlFor="rePassword">
                        Password
                    </label>
                    <input type="rePassword" name="rePassword" id="rePassword" onChange={ (e) => setRePassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Submit</button>
                </li>
                <li>
                    {/* If redirect is pointed to homepage, set redirect to signin page.*/}
                    {/* If redirect is not pointed to homepage, redirect to signin page, */}
                    {/* then set url as "signin?redirect=redirect". */}

                    {/* The page will jump to shipping page which is the url parsed from */}
                    {/* props.location.search */}
                    Already have an account? <Link to={ redirect === "/" ? "signin" :"signin?redirect=" + redirect } className="button secondary text-center">Sign-in</Link>
                </li>
            </ul>
        </form>
    </div>
    
}

export default RegisterScreen;
