'use client';

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export default function PostDetail({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<PostProps | null>(null);
  const [loading, setLoading] = useState(true); // Para controlar o estado de carregamento

  useEffect(() => {
    // Adicionando "desembrulho" para usar os parâmetros corretamente
    const fetchPost = async () => {

        await new Promise((resolve) => setTimeout(resolve, 200));
      const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
      const data = await response.json();

      if (data) {
        setPost(data);
      } else {
        notFound(); // Se o post não for encontrado
      }
      setLoading(false); // Após a busca, definimos o estado de carregamento como falso
    };

    fetchPost();
  }, [params.id]);

  // Exibindo "loading" até o post ser carregado
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-white border-t-transparent rounded-full" role="status">
          <span className="sr-only">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!post) {
    return <div>Post não encontrado!</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">{post.title}</h1>
      <p className="text-gray-400 text-center mb-4">Por Autor • Data</p>
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
        <p className="text-lg">{post.body}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
