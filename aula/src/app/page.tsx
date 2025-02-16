import { Metadata } from "next";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4 text-center">
      <h1 className="font-bold text-4xl md:text-5xl">Minha Agenda de Contatos</h1>
      <p className="text-gray-400 mt-2 text-lg md:text-xl">
        Organize seus contatos de forma simples e eficiente.
      </p>

      <Link
        href="/contatos"
        className="mt-6 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
      >
        Acessar Contatos
      </Link>
    </div>
  );
}
