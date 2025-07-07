import Herotext from "@/components/herotext"
import Paraller from "@/components/parallax"
export default function Home(){
  return(

    <section className='flex items-center justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
      <Herotext/>
      <Paraller/>

    </section>
  )
}