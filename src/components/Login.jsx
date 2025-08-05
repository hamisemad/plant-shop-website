import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser } from "./auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";



export default function Login() {

  const loginSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const navigate = useNavigate();
   const handleLogin = async (values, { setSubmitting }) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500)); 
    const success = await loginUser(values.username, values.password); 

    if (!success) {
      toast.error("Invalid credentials");
    } else {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Logged in successful!");
      navigate("/");
     
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div className="flex flex-col items-center mt-10">
      {location.state?.from && (
        <p className="text-sm text-gray-500 mb-4">Please login to continue</p>
      )}
      
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
       {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-[20em] max-w-[300px] text-black ">
          <Field
            name="username"
            type="text"
            placeholder="Username"
            className="border p-2 rounded bg-[#F7F6F2]"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="border p-2 rounded bg-[#F7F6F2]"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />

<button
  type="submit"
  className="bg-[#5D755E] text-white rounded py-2 hover:border-0 hover:opacity-75 focus:outline-none"
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <ClipLoader size={20} color="#fff" className="mx-auto" />
  ) : (
    "Login"
  )}
</button>       
 </Form>
       )}
      </Formik>
    </div>
  );
}
