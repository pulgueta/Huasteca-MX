import { SignUpForm } from "../components"

import LogoFull from '../static/logofull.jpg'

export const SignUp = () => {
  return (
    <div className='min-h-full md:min-h-[calc(100vh-160px)] grid place-content-center lg:grid-cols-2 lg:place-items-center bg-neutral-400 pb-10'>
      <div className="w-full">
        <img src={LogoFull} alt="Logo full size" className="w-80 lg:w-[480px] rounded-lg mx-auto mt-8" />
      </div>
      <SignUpForm />
    </div>
  )
}
