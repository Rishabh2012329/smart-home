import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState(false);
  const { error, handleForgotPassword, handleLogin } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resetPassword) {
      handleLogin(email, password);
    } else {
      handleForgotPassword(email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="-space-y-px" >
            <label htmlFor={"email"} className="sr-only">
              Email
            </label>
            <input
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={fixedInputClass}
              placeholder={"Email"}
              required
            />
          </div>
      
          {!resetPassword && <div className="-space-y-px" >
            <label htmlFor={"email"} className="sr-only">
              Password
            </label>
            <input
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className={fixedInputClass}
              placeholder={"Password"}
              required
            />
          </div>}
      
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {!resetPassword ? 'Login' : 'Reset Password'}
        </button>
       
          <button type="button" onClick={() => setResetPassword(!resetPassword)} className="text-sm text-blue-500 hover:text-blue-700">
          {resetPassword ? 'Login?' : 'Reset Password?'}
          </button>
        
      </div>
    </form>
  );
};

export default LoginForm;