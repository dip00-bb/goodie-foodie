import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, userRegister, googleLogIn, updateUser } = use(AuthContext);

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasLength = password.length >= 6;

    if (!hasUpper) return 'Password must contain at least one uppercase letter.';
    if (!hasLower) return 'Password must contain at least one lowercase letter.';
    if (!hasLength) return 'Password must be at least 6 characters long.';
    return '';
  };


  const handleRegister = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userName = e.target.name.value;
    const userPhotoURL = e.target.photo.value;
    const error = validatePassword(password);

    if (error) {
      setPasswordError(error);
    } else {
      setPasswordError('');
      userRegister(email, password)
        .then(result => {
          const user = result.user;
          updateUser(userName, userPhotoURL).then(() => {
            setUser({ ...user, displayName: userName, photoURL: userPhotoURL });
            navigate(`${location.state ? location.state : '/'}`)
            toast("Registration Successful");
            
          })
        }).catch(error => {
          toast.warn(error.message)
        })
    }

  }
  // setUser(result.user)
  // navigate('/')
  // toast.success("Register Successful")

  const handleGoogleLogin = () => {
    googleLogIn()
      .then(result => {
        setUser(result.user);
        toast.success("Register Successful")
        navigate('/')
        

      })
      .catch(error => toast.warn(error.message))
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-green-200">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Register</h2>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" required placeholder="Your name" name='name'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-black" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required placeholder="Your email" name='email'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-black" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input type="text" placeholder="Your photo URL" name='photo'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-black" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              placeholder="Create a password"
              name='password'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-600 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:underline">Login</Link>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-green-50 transition"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span className='text-black'>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
