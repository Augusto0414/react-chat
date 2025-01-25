import { Label } from "../../components";
import { Input } from "../../components/Input";
import { CiChat2 } from "react-icons/ci";
import { GrJava } from "react-icons/gr";

export const AuthPage = (): JSX.Element => {
    return (
        <main className="min-h-screen flex justify-center items-center bg-[#f6f5fcf5] relative">
            <div className="relative flex flex-col md:flex-row justify-between items-center w-[90%] 
                max-w-[1200px] h-auto md:h-[600px] bg-[#EAE5F0] shadow-lg rounded-2xl overflow-hidden">
                {/* Fondo con gradientes */}
                <div className="absolute inset-0 z-10">
                    <div className="w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-[#eb26fd] rounded-full 
                        absolute top-[20%] md:top-[30%] left-[10%] md:left-[5%] blur-[100px]"></div>
                    <div className="w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-[#37A38E] rounded-full 
                        absolute top-[50%] md:top-[50%] left-[20%] md:left-[30%] blur-[100px]"></div>
                </div>

                {/* Sección izquierda */}
                <section className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center space-y-6 z-20">
                    {/* Sección Títulos */}
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#343434]">Bienvenido</h1>
                        <p className="text-md md:text-lg text-gray-700">Inicia sesión para continuar</p>
                    </div>
                    {/* Sección contenido */}
                    <article className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <CiChat2 size={32} className="text-gray-800" />
                            <div>
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800">Chatea con nosotros</h2>
                                <p className="text-sm text-gray-600">
                                    Conecta con tus amigos y familiares en tiempo real. ¡No pierdas la oportunidad de charlar!
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <GrJava size={32} className="text-gray-800" />
                            <div>
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800">Invita a tus amigos</h2>
                                <p className="text-sm text-gray-600">
                                    Comparte nuestra plataforma con tus amigos y permite que se unan a las conversaciones.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección derecha: Formulario */}
                <section className="w-full md:w-1/2 h-auto md:h-full bg-[#EAE5F0] flex flex-col justify-center items-center px-6 md:px-12 py-8">
                    <div className="w-full max-w-md h-auto md:h-[85%] flex justify-center items-center bg-white z-20 rounded-xl">
                        <form className="w-full h-full flex flex-col justify-center items-center">
                            {/* Campo de formulario título */}
                            <div className="w-full text-center mb-6">
                                <h1 className="text-2xl md:text-3xl font-bold text-[#343434]">Iniciar sesión</h1>
                                <p className="text-sm md:text-lg text-gray-700 mb-2">
                                    ¿Aún no tienes una cuenta?
                                    <small className="mx-1.5 cursor-pointer text-sm md:text-lg text-[#2CC369]">
                                        Regístrate
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
                    </div>
                </section>
            </div>
        </main>
    );
};
