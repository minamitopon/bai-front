function App() {

  return (
    <>
      <h1>Bridge Auction Intelligence</h1>
      <button onClick={() => fetch('/api/matches').then(res => res.json()).then(console.log)}>Fetch Matches</button>
    </>
  )
}

export default App
