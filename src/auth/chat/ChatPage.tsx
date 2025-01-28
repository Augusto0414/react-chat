import { MdArrowRight } from "react-icons/md";
import { Input } from "../../components";

export const ChatPage = () => {
    return (
        <section className="flex h-screen">
            {/* Sidebar */}
            <aside className="flex flex-col h-full bg-[#25252D] w-64">
                {/* Encabezado del sidebar */}
                <header className="flex justify-center items-center p-4">
                    <img
                        src="https://github.com/Augusto0414.png"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full"
                    />
                    <h1 className="m-2 text-white font-medium">Nombre de usuario</h1>
                </header>

                {/* Botón para colapsar/expandir el sidebar */}
                <div className="flex-1"></div>
                <div className="p-4">
                    <button className="w-full border-dashed 
                    border-2 border-[#9A7FFB] rounded-3xl cursor-pointer px-6 py-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[#9A7FFB] text-sm font-semibold">salir</span>
                            <MdArrowRight className="text-[#9A7FFB]" size={32} />
                        </div>
                    </button>
                </div>
            </aside>

            {/* Contenido del chat */}
            <main className="flex flex-col h-screen w-screen bg-[#1E1E24]">
                {/* Chat */}
                <div className="p-4">
                    <h1 className="text-white">Hello</h1>
                </div>

                {/* Enviar mensaje */}
                <form className="mt-auto p-4">
                    <div className="flex gap-4">
                        <Input
                            type="text"
                            placeholder="Escribir mensaje"
                            className="flex-grow px-6 py-3 
                            text-white rounded-xl border-2 border-[#9A7FFB] bg-transparent"
                        />
                        <button className="flex-shrink-0 w-32 
                        rounded-xl bg-[#D1EDFF] text-[#1E1E24] font-semibold py-3 cursor-pointer">
                            Enviar
                        </button>
                    </div>
                </form>
            </main>
        </section>)
}
