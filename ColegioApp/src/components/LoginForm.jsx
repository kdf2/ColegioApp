import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="bg-custom-segundary rounded-lg  w-96 h-auto p-6">
      <form action="">
        <h1 className="text-white text-4xl font-bold mb-1 flex items-center justify-center p-6 ">
          Iniciar Sesión
        </h1>
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div>
            <input type="email" placeholder="Correo Electrónico" required />
          </div>
          <div>
            <FaUser />
          </div>
          <div>
            <input type="password" placeholder="Contraseña" required />
          </div>
          <div>
            <FaLock />
          </div>
          <button className="col-span-2">Ingresar</button>
          <div className="row-start-4">
            <p>
              Necesitas registrarte? <a href="#">Registrar</a>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
