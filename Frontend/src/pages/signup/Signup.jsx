import React,{useState} from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    const process = async () => {
      try {
        console.log(formData);
        const response = await fetch('http://localhost:3000/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if(data.error){
          alert(data.error);
        }
        else{
          alert("Log in to procced");
          navigate("/signin");
        }
      } catch (error) {
        console.log(error); 
        alert(error);
    }
  }
  process();
}
  


  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>
        <form className="mt-8 space-y-6" >
          <div className="space-y-4">


            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                User Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  type="text"
                  name='username'
                  onChange={(e) => handleChange(e)}
                  className={`block w-full pl-10 pr-3 py-2 border 'border-red-500' : 'border-gray-300'
                 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Username"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  name='email'
                  onChange={(e) => handleChange(e)}
                  className={`block w-full pl-10 pr-3 py-2 border 'border-red-500' : 'border-gray-300'
                 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type='password'
                  onChange={(e) => handleChange(e)}
                  autoComplete="current-password"
                  className="block w-full pl-10 pr-10 py-2 border  
                   rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="please give a strong password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button className="font-medium text-blue-600 hover:text-blue-500">
              <Link to="/signin">Sign In</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Signup;