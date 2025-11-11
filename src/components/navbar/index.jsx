import logo from "../../assests/logo.png"

export const Navbar=()=>{
    return(
        <header className="flex p-3 gap-3 border-b-2 border-yellow-300 ">
            <div className="w-12 h-12">
                <img className="w-full h-full" src={logo}/>
            </div>
            <h1 className="text-green-600 text-3xl font-bold">NoteIt</h1>
        </header>
    )
}