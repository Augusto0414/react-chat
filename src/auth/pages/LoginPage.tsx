import { Link } from "react-router-dom";
import { Label, Input } from "../../components";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useEffect } from "react";
import Swal from "sweetalert2";

// import { Input } from "../../components/Input";

const loginformField = {
    email: '',
    password: ''
}
export const LoginPage = () => {
    const { email, password, onInputChange: onInputLogin } = useForm(loginformField);
    const { errorMessage, sigIn } = useAuthStore();

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        sigIn({ email, password });
    }

    useEffect(() => {
        if (errorMessage) {
            Swal.fire('Error en la autenticación', errorMessage, "error");
        }
    }, [errorMessage])

    return (
        <form onSubmit={onSubmit} className="w-full h-full flex flex-col justify-center items-center">
            {/* Campo de formulario título */}
            <div className="w-full text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-[#343434]">Iniciar sesión</h1>
                <p className="text-sm md:text-lg text-gray-700 mb-2">
                    ¿Aún no tienes una cuenta?
                    <small className="mx-1.5 cursor-pointer text-sm md:text-lg text-[#2CC369]">
                        <Link
                            to="/auth/register"
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
                    value={email}
                    onChange={onInputLogin}
                />
                <Label htmlFor="password" className="text-sm text-gray-500">
                    Contraseña
                </Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={onInputLogin}
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
