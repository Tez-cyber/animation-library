import './App.css'
import Content from './Content'
import Header from './Header'
import Images from './Images'
import { gsap, Power3  } from "gsap"

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut()

  return (
    <>
      <div className="hero">
        <Header timeline={tl} ease={ease}  />
        <div className="flex items-center justify-between w-full h-screen flex-row">
          <Content timeline={tl} />
          <Images timeline={tl} ease={ease}  />
        </div>
      </div>
    </>
  )
}

export default App
