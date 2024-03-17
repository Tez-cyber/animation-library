import { useRef, useEffect } from "react"
const Images = ({timeline, ease}) => {
    let image1 = useRef(null)
    let image2 = useRef(null)
    let image3 = useRef(null)

    useEffect(() => {
        // timeline.from([image1, image2, image3], 1.2, {
        //     y: 1200,
        //     ease: ease,
        //     opacity: 0
        // })
        // .from(image1, 2, {
        //     scale: 1.6,
        //     ease: ease
        // }, "-=1.2" )
    })
  return (
    <div>
        <div className="images">
            <div ref={el => image1 = el} className="box1 absolute top-24 right-32 w-[200px] h-[300px] bg-jumbo1 bg-cover"></div>
            <div ref={el => image1 = el} className="box2 absolute top-[250px] right-[350px] w-[250px] h-[350px] bg-jumbo1 bg-cover bg-[50%]"></div>
            <div ref={el => image1 = el} className="box3 absolute top-[420px] right-[20px] w-[300px] h-[180px] bg-jumbo1 bg-cover"></div>
        </div>
    </div>
  )
}

export default Images