import { useRef, useEffect } from "react"

const Content = ({timeline}) => {
    let h1 = useRef(null)
    let pText = useRef(null)
    let btn = useRef(null)

    useEffect(() => {
        timeline.from([h1.children, pText, btn], {
            opacity: 0,
            y: 100,
            skewY: 10,
            stagger: {
                amount: .4
            },
        }, '-=1')
        .to([h1.children, pText, btn], {
            opacity: 1,
            skewY: 0
        })
    })
  return (
    <div className="">
        <div className="content flex items-start justify-center h-screen w-[30vw] ml-[200px] mr-[50px] flex-col">
            <h1 ref={el => h1 = el} className="content-inner-bold font-bold text-3xl text-white">
                <div className=" overflow-hidden">Hardwork beats talent</div>
                <br />
                <div className=" overflow-hidden">
                    when talent doesnt work hard
                </div>
            </h1>
            <p ref={el => pText = el} className=" text-sm w-4/5 font-extralight text-[#f0f0f0]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus.
            </p>
            <button ref={el => btn = el} className="w-[150px] p-3 mt-[20px] capitalize text-sm bg-[#0c0c0c] rounded-3xl text-white">
                Explore 
            </button>
        </div>
    </div>
  )
}

export default Content