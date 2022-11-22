import EventCard from "./Cards/EventCard"

function NextEvents() {
  return (
    <section className="container mx-auto my-16" id="events">
      <h2 className="text-4xl mb-12 text-blue-700 font-bold">Próximos Eventos</h2>

      <div className="container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between my-4">
        <EventCard 
          image="/assets/img/tribe_vibes.jpg"
          title="Tribe of Vibes"
          soon={true}
          date="Sexta-feira 9/12/2022 das 23h45 ás 08h00"
          place="Olympia Club Viseu"
        />
      </div>
    </section>
  )
}

export default NextEvents