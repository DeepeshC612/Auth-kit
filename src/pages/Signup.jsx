import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import SocialLoginButtons from "../components/SocialLogin";

const Signup = ({ switchForm }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const email = formData.get("email");
          const name = formData.get("fullName");
          const password = formData.get("password");
          console.log({ email, password, name });
        }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Register</h2>
        <InputField  label="Full Name" name="fullName" />
        <InputField label="Email" name="email"  />
        <PasswordInput label="Password" name="password"  />
        <button type="submit" className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 mt-3">
          Sign up
        </button>
        <div className="text-center mt-2">
          <a onClick={() => switchForm("login")} className="text-sm cursor-pointer text-blue-500 hover:text-blue-400">
            Already have a account?
          </a>
        </div>
        <SocialLoginButtons />
      </form>
    </div>
  );
};

export default Signup;
