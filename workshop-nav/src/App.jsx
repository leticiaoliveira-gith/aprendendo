import { Footer } from './components/Footer'; 
// Definindo o componente Navbar
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href='#'>Dashboard</a>
        </li>
        <li className="nav-item">
          <a href='#'>Widgets</a> 
        </li>
        <li className="nav-item">
            <button aria-expanded="false">Apps</button>
            <ul className="sub-menu" aria-label="Apps">
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Chat</a></li>
              <li><a href="#">Email</a></li>
            </ul>
        </li>
      </ul>
    </nav>
  )
}

// O componente principal que o main.jsx chama
function App() {
  return (
    <div className="container">
      <Navbar /> 
      <main className="main-content">
        <h1>Meu Dashboard</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App