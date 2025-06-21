import React, { useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/Auth/AuthContext';

const Login = () => {

  const navigate = useNavigate();
  const {login, isAuthenticated, loading, setLoading} = useContext(AuthContext);
  const [selectedRole, setSelectedRole] = useState('customer');

    const initialValues = {
        email:'john@mail.com',
        password:'changeme'
    }
    const [loginForm, setloginForm] = useState(initialValues);

    useEffect(()=>{
      if(isAuthenticated){
        navigate('/home');
      }
    },[isAuthenticated, navigate]);

    const handleLoginForm = (e) =>{
        const {name, value} = e.target;
       
        setloginForm({...loginForm, [name] :value });
    }

    const handleRole = (e) =>{
      const role = e.target.value;
      setSelectedRole(role);
    }

    const handleLoginFormSubmit = async (e) =>{
        e.preventDefault();

        const URL_Login = 'https://api.escuelajs.co/api/v1/auth/login'

           try {
            setLoading(true);
            const response = await fetch(URL_Login, {
              method: 'POST',
              headers:{
                'Content-Type' : 'application/json'
              },
              body:JSON.stringify(loginForm)
            });
            
            if(!response.ok){
              toast("Login failed...");
              throw new Error('Invalid Credentials or Server Error');

            }
            
            const data = await response.json();
            
            const { access_token } = data;
            
            login(access_token, selectedRole);

            toast("Login successfully...");

           } catch (error) {
            console.log(error);
           }finally{
            setLoading(false);
           }
          setloginForm(initialValues);
        }

    if(loading) return <div>Please Wait Loggingin....</div>
 
  return (
      <form onSubmit={handleLoginFormSubmit} className='login-form'>
        <input type="email" placeholder='Enter Email' name='email' value={loginForm.email} onChange={handleLoginForm}  />
        <input type="password" placeholder='Enter Password' name="password" value={loginForm.password} onChange={handleLoginForm}   />
        <select value={selectedRole} onChange={handleRole}>
          <option value="customer">Custsomer</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
        </select>
        <button type='submit'>Login</button>
      </form>
  )
}
export default Login
