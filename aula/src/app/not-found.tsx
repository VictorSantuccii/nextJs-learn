import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4 text-center">
      <h1 className="font-bold text-6xl md:text-7xl">404</h1>
      <p className="text-lg md:text-xl mt-2">Página não encontrada</p>
      <p className="text-gray-400 mt-2">A página que você tentou acessar não existe.</p>

      <Link
        href="/"
        className="mt-6 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
