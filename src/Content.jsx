

const Content = () => {
  return (
    <div className="">
        <div className="content flex items-start justify-center h-screen w-[30vw] ml-[200px] mr-[50px] flex-col">
            <h1 className="content-inner-bold font-bold text-3xl text-white">
                <div className=" overflow-hidden">Hardwork beats talent</div>
                <br />
                <div className=" overflow-hidden">
                    when talent doesnt work hard
                </div>
            </h1>
            <p className=" text-sm w-4/5 font-extralight text-[#f0f0f0]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus.
            </p>
            <button className="w-[150px] p-3 mt-[20px] capitalize text-sm bg-[#0c0c0c] rounded-3xl text-white">
                Explore 
            </button>
        </div>
    </div>
  )
}

export default Content