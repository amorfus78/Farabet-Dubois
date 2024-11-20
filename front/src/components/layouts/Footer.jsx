const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} EventHub. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
