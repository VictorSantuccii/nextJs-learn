import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Dashboard</h1>
      <p className="text-gray-400 text-center mb-8">
        Aqui você pode visualizar informações sobre seus contatos e gerenciar sua agenda.
      </p>

      {/* Cards com estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Card 1 - Total de Contatos */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold">Total de Contatos</h2>
          <p className="text-3xl font-bold mt-2">150</p>
        </div>

        {/* Card 2 - Novos Contatos */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold">Novos Contatos</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        {/* Card 3 - Contatos Favoritos */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold">Contatos Favoritos</h2>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
      </div>

      {/* Botão para visualizar todos os contatos */}
      <div className="text-center mt-8">
        <Link
          href="/contatos"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
        >
          📋 Ver Todos os Contatos
        </Link>
      </div>
    </div>
  );
}
