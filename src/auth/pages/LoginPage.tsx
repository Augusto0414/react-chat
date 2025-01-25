import { Link } from "react-router-dom";
import { Label, Input } from "../../components";
// import { Input } from "../../components/Input";
export const LoginPage = () => {
    return (
        <form className="w-full h-full flex flex-col justify-center items-center">
            {/* Campo de formulario título */}
            <div className="w-full text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-[#343434]">Iniciar sesión</h1>
                <p className="text-sm md:text-lg text-gray-700 mb-2">
                    ¿Aún no tienes una cuenta?
                    <small className="mx-1.5 cursor-pointer text-sm md:text-lg text-[#2CC369]">
                        <Link
                            to="/register"
                            className="mx-1.5 cursor-pointer text-sm md:text-lg text-[#2CC369]"
                        >
                            Regístrate
                        </Link>
                    </small>
                </p>
            </div>
            {/* Campos de formulario */}
            <div className="w-full px-6 space-y-4">
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
                    Iniciar sesión
                </button>
            </div>
        </form>
    )
}
