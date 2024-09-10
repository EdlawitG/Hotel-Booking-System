const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:');
    console.log('Password:');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-30 rounded max-w-sm w-full"
      >
            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white font-bold py-3 px-4 bg-[#1B2643] rounded-lg hover:bg-blue-900 transition duration-300"
            >
              Log In
            </button>
          
      </form>
    </div>
  );
};

export default LoginForm;
