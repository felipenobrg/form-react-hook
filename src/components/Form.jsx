import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export const Form = () => {
    const { register, handleSubmit } = useForm()

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

    const onSubmit = () => {
        console.log("Hello World!")
    }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <input type="text" placeholder="Full Name..." {...register("fullName")} />
        <input type="text" placeholder="Email..." {...register("email")} />
        <input type="number\" placeholder="Age..." {...register("age")} />
        <input ype="password" placeholder="Password..." {...register("password")} />
        <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
        <input type="submit" />
      </form>
    </>
  );
};
 