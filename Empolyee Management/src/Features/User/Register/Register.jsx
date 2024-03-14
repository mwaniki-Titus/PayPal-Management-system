// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useNavigate } from 'react-router-dom';

// // import './register.scss';

// const Register = () => {
//   const navigate = useNavigate();

//   const schema = yup.object().shape({
//     username: yup.string().required('Username is required').max(10, 'Username cannot be more than 10 characters'),
//     email: yup.string().required('Email is required').email('Invalid email format'),
//     password: yup.string().required('Password is required').min(4, 'Password must be at least 4 characters'),
//     confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
//   });

//   const { handleSubmit, register, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     localStorage.setItem('userData', JSON.stringify(data));
//     console.log(data);
//     // Consider displaying a confirmation message to the user
//     navigate('/Dashboard');
//   };

//   return (
//     <div className="register">
//       <div className="card">
//         <div className="left">
//           <span>Do you have an account?</span>
//           <button onClick={() => navigate('/login')}>Login</button>
//         </div>
//         <div className="right">
//           <h1>Register</h1>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <label htmlFor="username">Username</label>
//             <input type="text" id="username" placeholder="Username" {...register('username')} />
//             {errors.username && <p className="error">{errors.username.message}</p>}

//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="Email" {...register('email')} />
//             {errors.email && <p className="error">{errors.email.message}</p>}

//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" placeholder="Password" {...register('password')} />
//             {errors.password && <p className="error">{errors.password.message}</p>}

//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input type="password" id="confirmPassword" placeholder="Confirm Password" {...register('confirmPassword')} />
//             {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

//             <button type="submit">Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;