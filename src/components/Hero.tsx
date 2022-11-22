const Hero = () => {
  return (
    <div className="hero py-12 bg-base-200 pt-24" id="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/assets/img/tribe_vibes.jpg" className="max-w-xs mr-4 rounded-3xl shadow-2xl" />

        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-green-500">Trance</span> <span className="text-blue-700">Therapy</span> Sessions
          </h1>
          <p className="py-6">
            Bem-vindo á Trance Therapy Sessions, nascemos para responder ao enorme espírito psicadélico que habita em Viseu, torna-te um amante do Trance e vem participar dos nossos incríveis eventos.
          </p>
          <p className="pb-4">
            `Bringing parties to party people...`
          </p>

          <button className="btn btn-primary" disabled>Reserva já a tua pulseira</button>
        </div>
      </div>
    </div>
  )
}

export default Hero