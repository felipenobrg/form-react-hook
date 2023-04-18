import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is required"),
        email: yup.string().email().required("Your Email is required"),
        age: yup.number().positive().integer().min(18).required("Your Age is required"),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Don't Match").required(),
})

    const { 
        register,
        handleSubmit, 
        formState:
        {errors},
     } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className='App' >
      <div className="input-container">
      <h2>Sign Up</h2>
      <form className='form' onSubmit={handleSubmit(onSubmit)}> 
        <input className='fullName' type="text" placeholder="Full Name..." {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <input className='email' type="email" placeholder="Email..." {...register("email")} />
        <p>{errors.email?.message}</p>
        <input className='age' type="number" placeholder="Age..." {...register("age")} />
        <p>{errors.age?.message}</p>
        <input className='password' type="password" placeholder="Password..." {...register("password")} />
        <p>{errors.password?.message}</p>
        <input className='confirmPassword' type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
        <p>{errors.confirmPassword?.message}</p>
        <input className='inputSubmit' type="submit" value={"Submit"} />
      </form>
     </div>
    </div>
  );
};
 