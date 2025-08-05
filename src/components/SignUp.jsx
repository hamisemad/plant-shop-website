import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "./auth";
import { toast } from 'react-toastify';
import { ClipLoader } from "react-spinners"; 

export default function SignUp() {
  const signupSchema = Yup.object({
    username: Yup.string().min(3).required("Username is required"),
    password: Yup.string().min(6).required("Password is required"),
    email: Yup.string().email("Please enter a valid email address").required("Email is required"),
  });

const handleSignUp = async (values, { setSubmitting }) => {
  const { username, email, password } = values;
  try {
    await new Promise(resolve => setTimeout(resolve, 500)); 
    const result = await registerUser(username, email, password);

    if (!result.success) {
      toast.error(result.message || "Registration failed");
    } else {
      toast.success("Registered successfully!");
    }
  } catch (error) {
    toast.error("Registration failed. Try again.");
    console.error(error);
  } finally {
    setSubmitting(false);
  }
};

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={signupSchema}
      onSubmit={handleSignUp}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-full max-w-[300px] text-black">
          <Field name="username" type="text" placeholder="Username" className="border p-2 rounded bg-[#F7F6F2]" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />

          <Field name="email" type="email" placeholder="Email" className="border p-2 rounded bg-[#F7F6F2]" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <Field name="password" type="password" placeholder="Password" className="border p-2 rounded bg-[#F7F6F2]" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

          <button
            type="submit"
            className="bg-[#5D755E] text-white rounded py-2 hover:opacity-75 focus:outline-none flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ClipLoader size={20} color="#fff" />
            ) : (
              "Sign Up"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}
