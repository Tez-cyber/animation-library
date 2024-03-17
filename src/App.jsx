import './App.css'
import Content from './Content'
import Header from './Header'
import Images from './Images'

function App() {

  return (
    <>
      <div className="hero">
        <Header />
        <div className="flex items-center justify-between w-full h-screen flex-row">
          <Content />
          <Images />
        </div>
      </div>
    </>
  )
}

export default App
