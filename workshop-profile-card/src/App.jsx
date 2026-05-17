export function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  )
}

export function App() {
  return (
    <div className="flex-container">
      <Card name="Mark" title="Front-End developer" bio="I like to work with different front-end technologies and play video games." />
    </div>
  )
}