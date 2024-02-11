
import Image from "next/image";
import companyLogoIcon from "../../public/companyPlaceholderIcon.svg";
/*https://tailwindcomponents.com/component/login-form-30 pulled from here, I'll come back to adjust styling and more once we get a standard style set up*/ 
export default function Login() {
    return (
        <main>
            <div className="bg-gray-600 w-full h-screen justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image priority src={companyLogoIcon} alt="Company Logo Icon" className="mx-auto h-40 w-auto"/>
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Sign in to continue</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-balance">Email address</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"/>
                            </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-black">Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-red-500 hover:text-red-400">Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
                    </div>
                    </form>

                    <p class="mt-10 text-center text-sm text-gray-300">
                    New User?
                    <a href="#" class="font-semibold leading-6 text-red-500 hover:text-red-400"> Sign up now!</a>
                    </p>
                </div>
            </div>
        </main>
    );
  }