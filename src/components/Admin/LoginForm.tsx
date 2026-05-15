import ProfileIcon from "@/components/Icons/ProfileIcon";
import LockIcon from "@/components/Icons/LockIcon";
import BrandLogo from "@/components/Icons/BrandLogo";

export default function LoginForm() {
  return (
                    <form className="w-140 h-150 bg-white p-8 rounded-lg shadow-md">
                        <div className="text-center">
                            <div className="text-red-500 justify-center items-center flex">
                                <BrandLogo />
                            </div>
                            <h3 className="text-xl font-medium">Admin Login</h3>
                            <h5 className="text-xs">Sign in to your admin account</h5>
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-semibold text-black">
                                Email Address
                            </label>

                            <div className="relative">
                                <ProfileIcon />
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="h-12 w-full rounded-lg border border-gray-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-red-500"
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-semibold text-black">
                                Password
                            </label>

                            <div className="relative">
                                <LockIcon />

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="h-12 w-full rounded-lg border border-gray-300 bg-white pl-11 pr-11 text-sm outline-none transition focus:border-red-500"
                                />

                                <i className="fa-regular fa-eye absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"></i>
                            </div>
                        </div>

                        <div className="mb-6 flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="accent-red-500"
                                />

                                Remember me
                            </label>

                            <a
                                href="#"
                                className="text-sm font-medium text-red-500 hover:text-red-600"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="mb-6 h-12 w-full rounded-lg bg-red-500 text-sm font-semibold text-white transition hover:bg-red-600 cursor-pointer"
                        >
                            Login
                        </button>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>

                            <div className="relative flex justify-center">
                                <span className="bg-white px-3 text-sm text-gray-500">
                                    or continue with
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="h-5 w-5"
                            />

                            Login with Google
                        </button>
                        <h6 className="text-xs text-center mt-5">&copy; 2026 <span className="text-red-500 font-medium">Product Catalogue Management System.</span> All rights reserved.</h6>
                    </form>  )
}
