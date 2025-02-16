import Link from "next/link";

export default function Contatos() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">Gerencie seus Contatos</h1>
      <p className="text-gray-400 mt-2 text-lg md:text-xl">
        Organize e acesse facilmente todos os seus contatos.
      </p>

      {/* Botões interativos */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link
          href="/adicionar-contato"
          className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
        >
          ➕ Adicionar Contato
        </Link>

        <Link
          href="/listar-contatos"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
        >
          📋 Ver Contatos
        </Link>
      </div>
    </div>
  );
}
