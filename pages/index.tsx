import type { NextPage } from 'next'
import Head from 'next/head'
import Feature from '../components/FeatureWithImage'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col mx-auto items-center max-w-[640px]">
        <div className="bg-[#121A35]  px-5 py-8">
          <div className=' text-center'>
            <h1 className="px-4 text-4xl font-bold text-white">Cancel on your</h1>
            <h1 className="px-4 text-4xl font-bold text-[#21DA49]">Friends</h1>
            <p className='mt-4 text-lg font-semibold leading-7 tracking-tight text-white/80'>Making cancelling plans easier.</p>
            <p className='text-lg font-semibold leading-7 tracking-tight text-white/80'>All the joy, none of the guilt.</p>
          </div>
          <div className="rounded-lg bg-[#1A2754] px-4 shadow py-3 mt-16 relative">
            <form>
              <div className='form-group mb-5'>
                <label htmlFor="plan" className="block text-sm mt-2 font-normal text-white mb-2">
                  Plan to cancel
                </label>
                <select
                  id="plan"
                  name="plan"
                  className="block w-full  py-2 pl-2 rounded-md border-gray-300 text-base  focus:outline-none"
                  defaultValue="Birthday"
                >
                  <option className='w-fit'>Birthday</option>
                </select>
              </div>

              <div className='form-group mb-6'>
                <label htmlFor="excuse" className="block  text-sm font-normal text-white mb-2">
                  Excuse
                </label>
                <select
                  id="excuse"
                  name="excuse"
                  className="mt-1 block w-full  py-2 pl-2 rounded-md border-gray-300 text-base  focus:outline-none"
                  defaultValue=""
                >
                  <option>I'm pregnant again</option>
                </select>
              </div>

              <div className='form-group mb-6'>
                <label htmlFor="tone" className="block text-sm font-normal mb-2 text-white">
                  Tone
                </label>
                <select
                  id="tone"
                  name="tone"
                  className="block w-full  py-2 pl-2 rounded-md border-gray-300 text-base  focus:outline-none"
                  defaultValue=""
                >
                  <option>Angry</option>
                </select>
              </div>

              <div className='form-group mb-6' >
                <label htmlFor="blame" className="block text-sm font-normal text-white mb-2">
                  Blame
                </label>
                <select
                  id="blame"
                  name="blame"
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base"
                  defaultValue=""
                >
                  <option>You never believed in me</option>
                </select>
              </div>

              <div className="buttons">
                <button type="submit" className='w-full py-3  rounded-md mb-5 text-center font-medium text-white text-[15px] bg-[#40D260]/70'>Justify your negligence</button>
                <button type='button' className='w-full py-3  rounded-md mb-3 text-center font-medium text-white text-[15px] bg-gradient-to-r from-[#AC62E6] to-[#9755CB]'>Random</button>
              </div>
            </form>

            <div className="mt-4">
              <h1 className="mb-3 text-lg font-semibold text-white">Result:</h1>
              <div className="rounded bg-[#D9D9D933]/20 relative px-3 py-4">
                <div className="icon absolute top-2 h-9 w-9 flex items-center justify-center right-3 bg-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                  </svg>
                </div>
                <div className="text-white font-semibold">
                  <p>Hey _ _ _ _ , </p>

                  <p className='my-3'>I'm sorry to let you know this but I won't be able to attend your bar mitzvah. Unfortunately, I was attacked in the street last night anddrake flew me out to the hospital. I'm really grateful for the help he gave me, but I can't go to your party now.</p>

                  <p className='mb-3'>I hope you have a great day!</p>

                  <p>Sincerely, _ _ _ _</p>
                </div>
              </div>
            </div>

            <div className="absolute w-40 h-40 bg-[#21DA49]/40 blur-3xl -top-2 -left-4 z-0"></div>
            <div className="absolute w-4 h-40 bg-[#21DA49]/40 blur-xl bottom-16 -left-4 z-0"></div>
            <div className="absolute w-3 h-40 bg-[#21DA49]/60 blur-xl top-1/2 -right-4 z-0"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
