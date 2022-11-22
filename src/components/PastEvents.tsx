import EventCard from "./Cards/EventCard"

function PastEvents() {
  return (
    <section className="container mx-auto my-16">
      <h2 className="text-4xl mb-12 text-orange-700 font-bold">Eventos a Recordar</h2>

      <div className="container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between my-4">
        <EventCard 
          image="https://scontent.fopo3-1.fna.fbcdn.net/v/t39.30808-6/278220273_378774217588700_5730836331576059020_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=340051&_nc_ohc=h65MyUdiHpQAX_BkBzu&_nc_ht=scontent.fopo3-1.fna&oh=00_AfBgFlpdyD8UkIPYGJn23rrmrYB9kWF-cJI1HE9TD9fNCw&oe=6382D4F9"
          title="Reversible Forest"
          soon={false}
          date=""
          place="Ice Club Viseu"
        />

        <EventCard 
          image="https://scontent.fopo3-1.fna.fbcdn.net/v/t39.30808-6/261324292_289458943186895_6435524719314476274_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=340051&_nc_ohc=4P1YdJlkmCYAX8bL2B8&_nc_ht=scontent.fopo3-1.fna&oh=00_AfAsmR7zvbdTBc3tOUAlmp7agl7JdCYKGlTwYV4W268woA&oe=638242A6"
          title="The Lost Cave"
          soon={false}
          date=""
          place="Santo Graal Viseu"
        />

        <EventCard 
          image="https://scontent.fopo3-2.fna.fbcdn.net/v/t39.30808-6/245159627_260015212797935_25748241853578946_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=340051&_nc_ohc=MoIDBFyqbikAX_V8Z4K&_nc_ht=scontent.fopo3-2.fna&oh=00_AfCCSlwnfkdYzAPHm-mCFX8py1OWRArzteOE9FY1SI2iQw&oe=63817B84"
          title="From the Ashes"
          soon={false}
          date=""
          place="Krypton Sátão Viseu"
        />
      </div>
    </section>
  )
}

export default PastEvents