import type { NextPage } from 'next'
import Head from 'next/head'
import Feature from '../components/FeatureWithImage'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div className="relative font-sans">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col mx-auto items-center max-w-[640px]">
        <div className="bg-[#121A35]  px-5 py-8">
          <div className=' text-center'>
            <h1 className="text-[48px] tracking-[-0.04em] leading-[57px] font-bold text-white">Cancel on your <br /><span className="text-[#21DA49]">✌friends✌</span></h1>
            <p className='mt-4 text-[20px] tracking-[-0.05em] font-semibold leading-[30px] text-white/80'>Making cancelling plans easier.</p>
            <p className='text-[20px] tracking-[-0.05em] font-semibold leading-[30px] text-white/80'>All the joy, none of the guilt.</p>
          </div>
          <div className="rounded-[10px] bg-[#1A2754]/60 px-4 shadow py-3 mt-16 relative z-50">
            <form>
              <div className='form-group mb-5'>
                <label htmlFor="plan" className="block text-[14px] leading-[17px] tracking-[-0.02em] mt-2 font-normal text-white mb-2">
                  Plan to cancel
                </label>
                <select
                  id="plan"
                  name="plan"
                  className="select w-full  py-4 pl-2 rounded-[5px] border-gray-300 text-[15px] leading-[18px] tracking-[-2%]  focus:outline-none"
                  defaultValue="Birthday"
                >
                  <option className='w-fit'>Birthday</option>
                </select>
              </div>

              <div className='form-group mb-6'>
                <label htmlFor="excuse" className="block text-[14px] leading-[17px] tracking-[-0.02em] mt-2 font-normal text-white mb-2">
                  Excuse
                </label>
                <select
                  id="excuse"
                  name="excuse"
                  className="block select w-full  py-[10px] pl-2 rounded-[5px] border-gray-300 text-base  focus:outline-none"
                  defaultValue=""
                >
                  <option>I'm pregnant again</option>
                </select>
              </div>

              <div className='form-group mb-6'>
                <label htmlFor="tone" className="block text-[14px] leading-[17px] tracking-[-0.02em] mt-2 font-normal text-white mb-2">
                  Tone
                </label>
                <select
                  id="tone"
                  name="tone"
                  className="block select w-full  py-[10px] pl-2 rounded-[5px] border-gray-300 text-base  focus:outline-none"
                  defaultValue=""
                >
                  <option>Angry</option>
                </select>
              </div>

              <div className='form-group mb-6' >
                <label htmlFor="blame" className="block text-[14px] leading-[17px] tracking-[-0.02em] mt-2 font-normal text-white mb-2">
                  Blame
                </label>
                <select
                  id="blame"
                  name="blame"
                  className="block select w-full  py-[10px] pl-2 rounded-[5px] border-gray-300 text-base  focus:outline-none"
                  defaultValue=""
                >
                  <option>You never believed in me</option>
                </select>
              </div>

              <div className="buttons">
                <button type="submit" className='w-full py-[6px] leading-[30px] rounded-[5px] mb-4 text-center font-medium text-white text-[15px] bg-[#40D260]/70'>Justify your negligence</button>
                <button type='button' className='w-full py-[6px] leading-[30px] rounded-[5px] mb-4 text-center font-medium text-white text-[15px] bg-gradient-to-r from-[#AC62E6] to-[#9755CB]'>Random</button>
              </div>
            </form>

            <div className="mt-4">
              <h1 className="mb-[14px] text-[20px] leading-[30px] tracking-[-0.05em] font-semibold text-white">Result:</h1>
              <div className="rounded bg-[#D9D9D9]/20 relative px-3 py-6">
                <div className="icon absolute top-3 h-7 w-7 flex items-center justify-center right-3 bg-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-5">
                    <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                  </svg>

                </div>
                <div className="">
                  <p className='text-white font-normal text-[16px] leading-[20px]'>
                    <span>Hey _ _ _ _ , <br/></span>
                    <span className='block my-6'>I'm sorry to let you know this but I won't be able to attend your bar mitzvah. Unfortunately, I was attacked in the street last night anddrake flew me out to the hospital. I'm really grateful for the help he gave me, but I can't go to your party now.<br/></span>
                    <span className='block mb-6'>I hope you have a great day!<br/></span>
                    <span>Sincerely, _ _ _ _</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="absolute overflow-hidden w-40 h-40 bg-[#21DA49]/20 blur-3xl top-[20%] -left-4 z-10"></div>
          <div className="absolute w-40 h-44 bg-[#21DA49]/30 blur-3xl top-[70%] -left-3 z-0"></div>
          <div className="absolute w-40 h-40 bg-[#21DA49]/40 blur-3xl top-1/2 right-4 z-0"></div>
        </div>
      </main>
    </div>
  )
}

export default Home
