import { MdArrowRight } from "react-icons/md";
import { Input } from "../../components";
import { SendMessage } from "./components/SendMessage";

const User = [
    {
        id: "1",
        username: "Usuario 1",
        avatar: "https://github.com/Augusto0414.png",
        lastMessage: "Hola, cómo estás?",
        timestamp: "1637394710",
        unreadMessages: 2,
        active: false,
    },
    {
        id: "2",
        username: "Usuario 2",
        avatar: "https://github.com/Augusto0414.png",
        lastMessage: "Hola, cómo estás?",
        timestamp: "1637394710",
        unreadMessages: 0,
        active: true,
    },
    {
        id: "3",
        username: "Usuario 3",
        avatar: "https://github.com/Augusto0414.png",
        lastMessage: "Hola, cómo estás?",
        timestamp: "1637394710",
        unreadMessages: 5,
        active: false,
    }
];

export const ChatPage = () => {
    return (
        <section className="flex flex-col lg:flex-row h-screen">
            {/* Sidebar */}
            <aside className="flex flex-col h-full bg-[#25252D] w-full lg:w-64">
                {/* Header */}
                <header className="flex items-center gap-4 p-4 border-b border-gray-700">
                    <img
                        src="https://github.com/Augusto0414.png"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full"
                    />
                    <h1 className="text-white font-medium text-lg">Nombre de Usuario</h1>
                </header>

                {/* User List */}
                <div className="flex-1 overflow-y-auto">
                    {User.map(user => (
                        <div
                            key={user.id}
                            className={`flex items-center gap-4 px-1 py-3 hover:bg-gray-600 cursor-pointer transition ${user.active ? "bg-[#343434]" : ""
                                }`}
                        >
                            <img
                                src={user.avatar}
                                alt="User Avatar"
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                                <h2 className="text-white font-medium text-sm">{user.username}</h2>
                                <p className="truncate text-gray-400 text-xs">{user.lastMessage}</p>
                            </div>
                            {user.unreadMessages > 0 && (
                                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                    {user.unreadMessages}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Logout Button */}
                <div className="p-4">
                    <button className="w-full flex items-center justify-between border border-[#9A7FFB] text-[#9A7FFB] px-4 py-3 rounded-lg hover:bg-[#343434] transition">
                        <span className="text-sm font-semibold">Salir</span>
                        <MdArrowRight size={20} />
                    </button>
                </div>
            </aside>

            {/* Chat Content */}
            <main className="flex flex-col h-full w-full bg-[#1E1E24]">
                {/* Chat Header */}
                <header className="p-4 border-b border-gray-700">
                    <h1 className="text-white text-lg font-medium">Chat con Usuario 2</h1>
                </header>

                {/* Chat Messages */}
                <SendMessage
                    message="Hola, cómo estás?"
                    time="hace 5 minutos"
                    userType="sender"
                    avatarUrl="http://github.com/augusto0414.png"
                />
                <div className="flex flex-1"></div>
                {/* Message Input */}
                <form className="p-4 border-t border-gray-700">
                    <div className="flex items-center gap-4">
                        <Input
                            type="text"
                            placeholder="Escribe un mensaje..."
                            className="flex-1 px-4 py-2 text-white rounded-lg bg-[#343434] border border-[#9A7FFB] focus:outline-none focus:ring-2 focus:ring-[#9A7FFB]"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#9A7FFB] text-white font-semibold rounded-lg hover:bg-[#7A63FF] transition"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </main>
        </section>
    );
};