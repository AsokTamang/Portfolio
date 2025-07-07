import Herotext from "@/components/herotext"
import Paraller from "@/components/parallax"
export default function Home(){
  return(

    <section className='flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space'>
      <Herotext/>
      <Paraller/>

    </section>
  )
}