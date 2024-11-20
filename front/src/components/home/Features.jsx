const Features = () => {
  const features = [
    {
      title: 'Des soirées près de chez toi',
      description:
        'Explore des événements locaux adaptés à tes préférences et à ta localisation.',
    },
    {
      title: 'Filtres de recherche avancés',
      description:
        'Filtre les soirées par type, nombre de places disponibles, et plus encore.',
    },
    {
      title: 'Communauté active',
      description:
        'Évalue les organisateurs et les participants avec un système de notation.',
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Pourquoi rejoindre notre plateforme ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
