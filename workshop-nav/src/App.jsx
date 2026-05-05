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
    </div>
  )
}

export default App