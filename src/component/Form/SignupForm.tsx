import React from 'react'

const SignupForm = () => {
  return (
    <form className="mt-12">
        <h3 className="text-xl font-bold text-primary mb-8 text-center">Create free account</h3>
        <div className="space-y-4">
            <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <div className="relative flex items-center">
                    <input name="name" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter name" />
                </div>
            </div>
            <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                    <input name="email" type="email" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter email" />
                </div>
            </div>
            <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                    <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter password" />
                </div>
            </div>
            <div>
                <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                <div className="relative flex items-center">
                    <input name="cpassword" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter comfirm password" />
                </div>
            </div>
            <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
            <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                I accept the <a href="#" className="text-primary font-semibold hover:underline ml-1">Terms and Conditions</a>
            </label>
            </div>
        </div>
        <div className="mt-8">
            <button type="button" className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-primary hover:bg-[#4a7dff]/90 focus:outline-none rounded-md">
            Create an account
            </button>
        </div>
        <p className="text-sm mt-8 text-center text-gray-800">Already have an account? <a href="/signin" className="text-primary font-semibold hover:underline ml-1">Login here</a></p>
    </form>
  )
}

export default SignupForm
