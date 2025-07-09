'use client'
import { Timeline } from "@/components/timeline"
import { experiences } from "@/constants"
export default function Work(){
    return(
        <div id="work" className="w-full">
            <Timeline data={experiences}/>
        </div>
    )
}