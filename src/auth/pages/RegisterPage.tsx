import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { Input, Label } from "../../components";

export const RegisterPage = () => {
    const navigate = useNavigate()
    const handleBack = () => navigate(-1);
    return (
        <>
            <div>
                <header className="w-full flex items-center relative">
                    <button
                        onClick={handleBack}
                        className="absolute left-4 rounded-full p-3 bg-white cursor-pointer">
                        <IoIosArrowBack size={30} className="text-2xl" />
                    </button>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#343434] mx-auto">
                        Registrarse
                    </h1>
                </header>
                <form action="">
                    <div className="w-full px-6 space-y-4">
                        <Label htmlFor="name" className="text-sm text-gray-500">
                            Nombre de usuario
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Nombre de usuario"
                        />
                        <Label htmlFor="email" className="text-sm text-gray-500">
                            Correo electrónico
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                        />
                        <Label htmlFor="password" className="text-sm text-gray-500">
                            Contraseña
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                        />
                        <button
                            type="submit"
                            className="w-full mt-6 rounded-xl p-4 text-white font-semibold 
                                        hover:bg-[#2cc368f3] bg-[#2CC369] cursor-pointer"
                        >
                            Registrarse
                        </button>
                    </div>

                </form>

            </div>
        </>
    )
}
