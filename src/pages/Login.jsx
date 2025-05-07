import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import SocialLoginButtons from "../components/SocialLogin";

const Login = ({ switchForm }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const email = formData.get("email");
          const password = formData.get("password");
          console.log({ email, password });
        }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Login</h2>
        <InputField label="Email" name="email" />
        <PasswordInput label="Password" name="password" />
        <button type="submit" className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 mt-3">
          Log In
        </button>
        <div className="text-center mt-2">
          <a href="/forgot-password" className="text-sm cursor-pointer text-blue-500 hover:text-blue-400">
            Forgot password?
          </a>
        </div>
        <div className="text-center ">
          <a onClick={() => switchForm("signup")} className="text-sm cursor-pointer text-blue-500 hover:text-blue-400">
            Don't have a account?
          </a>
        </div>
        <SocialLoginButtons />
      </form>
    </div>
  );
};

export default Login;
