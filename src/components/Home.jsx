export default function Home(){
    return(
        <div className="w-full h-full flex items-center justify-center z-0 md:text-white md:block overflow-scroll">
            <img src="demian_dark.jpeg" alt="" className=" mb-8 hidden md:block md:w-full md:h-screen md:z-0 "/>
            <img src="demian_boat.jpeg" alt="" className="h-auto w-full  md:hidden" />
            <h2 className="text-xl absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-5 md:top-100 md:left-64">Músico, Artista, Compositor</h2>
        </div>
    )
}