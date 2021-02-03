import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function ProfileScreen(props){

//     const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rePassword, setRePassword] = useState('');
//   const userRegister = useSelector(state => state.userRegister);
//   const { loading, userInfo, error } = userRegister;
//   const dispatch = useDispatch();

//   useEffect(() => {
//      if (userInfo){
//          // for directing user to home page. 
//          props.history.push("/");
//      }
//       return () => {
//           //
//       }
//   }, [userInfo]) // to check if the state of userInfo changed, and run if statement when it changed.

    return <div>
      <h1>Your Profile:</h1>
      <p>User Name:</p>
      <p>E-mail:</p>
      <p>...</p>
      <p>Add/Edit products: <Link to="/products">Here</Link></p>
    </div>
    
}

export default ProfileScreen;
