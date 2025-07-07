export default function Paraller() {
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/**bg sky 1 */}
        <div className="absolute inset-0 w-full h-screen -z-50
        "
        style={{backgroundImage:"url(/sky.jpg)",
            backgroundPosition:'center',
            backgroundSize:'cover'
        }} />
        {/**mountain layer 3 */}
        <div 
        className="absolute inset-0 -z-40"
        style={{backgroundImage:'url(/mpuntain-3.png)',
              backgroundPosition:'bottom',
            backgroundSize:'cover'
        }}/>
        {/**planets*/}
       <div 
        className="absolute inset-0 -z-30"
        style={{backgroundImage:'url(/planets.png)',
              backgroundPosition:'bottom',
            backgroundSize:'cover'
        }}/>
        {/**mountain layer 2 */}
       <div 
        className="absolute inset-0 -z-20"
        style={{backgroundImage:'url(/mpuntain-2.png)',
              backgroundPosition:'bottom',
            backgroundSize:'cover'
        }}/>
        <div 
        className="absolute inset-0 -z-10"
        style={{backgroundImage:'url(/mpuntain-1.png)',
              backgroundPosition:'bottom',
            backgroundSize:'cover'
        }}/>
        <div />
      </div>
    </section>
  );
}
