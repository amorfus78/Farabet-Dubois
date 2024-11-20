const Hero = () => {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Trouve la soirée de tes rêves
        </h1>
        <p className="text-lg mb-6">
          Ne sois plus jamais à court de plans, trouve des événements près de
          chez toi en quelques clics.
        </p>
        <a
          href="#search"
          className="bg-white text-indigo-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-indigo-100"
        >
          Explorer les soirées
        </a>
      </div>
    </section>
  )
}

export default Hero
