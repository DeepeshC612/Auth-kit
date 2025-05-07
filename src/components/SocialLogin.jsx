import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
const SocialLoginButtons = () => (
    <div className="mt-4">
      <p className="text-center text-gray-500 text-sm mb-2">or continue with</p>
      <div className="flex justify-center gap-4">
        <button type='button' className="bg-white cursor-pointer p-2 rounded-full shadow-sm">
          <FcGoogle className="text-2xl " />
        </button>
        <button type='button' className="bg-white cursor-pointer p-2 rounded-full shadow-sm">
          <FaGithub className="text-2xl " />
        </button>
      </div>
    </div>
  );
  
export default SocialLoginButtons;
  