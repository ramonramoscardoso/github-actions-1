import { GenerateDog } from "./components/dog"
import { fetchDog } from "./components/dog-service"

function App() {
  return (
    <>
      <h1>Project to study GitHub Actions! :)</h1>
      <br />
      <GenerateDog service={fetchDog} />
    </>
  )
}

export default App
