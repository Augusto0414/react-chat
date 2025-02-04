import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { Input, Label } from "../../components";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const registerForm = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
}

export const RegisterPage = () => {
    const navigate = useNavigate()
    const handleBack = () => navigate(-1);
    const { errorMessage, signUp } = useAuthStore();
    const { loading } = useSelector((state: RootState) => state.authSlice);
    const { name, email, password, passwordConfirm, onInputChange: onInputRegister, onResetForm } = useForm(registerForm);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
            return;
        }
        const response = await signUp({ username: name, email, password });
        if (response) {
            Swal.fire("¡Éxito!", "Usuario registrado correctamente", "success");
            onResetForm();
        }
    }

    useEffect(() => {
        if (errorMessage) {
            Swal.fire('Error al registrarse', errorMessage, "error");
        }
    }, [errorMessage])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
            </div>

        );
    }
    return (
        <div className="overflow-scroll md:h-[85%]">
            <div>
                {/*Encabezado*/}
                <header className="w-full mb-5 flex items-center relative">
                    <button
                        onClick={handleBack}
                        className="absolute left-4 rounded-full p-3 bg-white cursor-pointer">
                        <IoIosArrowBack size={30} className="text-2xl" />
                    </button>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#343434] mx-auto">
                        Registrarse
                    </h1>
                </header>

                {/*Formulario*/}
                <form onSubmit={handleSubmit} >
                    <div className="w-full px-6 space-y-4">
                        <Label htmlFor="name" className="text-sm text-gray-500">
                            Nombre de usuario
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Nombre de usuario"
                            value={name}
                            onChange={onInputRegister}
                        />
                        <Label htmlFor="email" className="text-sm text-gray-500">
                            Correo electrónico
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={onInputRegister}

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
                            onChange={onInputRegister}
                        />
                        <Label htmlFor="password" className="text-sm text-gray-500">
                            Confirmar contraseña
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            name="passwordConfirm"
                            placeholder="Confirmar contraseña"
                            value={passwordConfirm}
                            onChange={onInputRegister}
                        />
                        <button
                            type="submit"
                            className="w-full mt-6 mb-7 rounded-xl p-4 text-white font-semibold 
                                        hover:bg-[#2cc368f3] bg-[#2CC369] cursor-pointer"
                        >
                            Registrarse
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
