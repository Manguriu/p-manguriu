import Image from 'next/image'
import Hero from '@/components/Hero'
import ExPCard from '@/components/ExPCard'

export default function Home() {
  return (
    <main className="overflow-hidden">
   
    <Hero />
    <div className='mt-12 padding-x padding-y max-width' id="more">
    <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>My Profile </h1>
        <p>About Me...</p>
      </div>

      <section>
      <div className='home__exp-wrapper'>
        <ExPCard />
      </div>
     </section>

    </div>
     
    </main>
  )
}
