'use client';

import next from "next";
import Link from "next/link";
import { useState, useEffect, cache } from "react";

interface PostProps {
  id: number;
  title: string;
  body: string;
  likes: number;
  userId: number;
}

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  // Função assíncrona que busca os posts da API
  const fetchPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts",{ cache: 'force-cache', next: {
      revalidate: 60 }
});
    const data = await response.json();
    setPosts(data.posts);
  };

  // Chama a função fetchPosts quando o componente for montado
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">📢 Posts</h1>
      <p className="text-gray-400 text-center mb-8">
        Explore os posts compartilhados pela comunidade e fique por dentro das novidades!
      </p>

      {/* Lista de Posts */}
      <div className="max-w-4xl mx-auto space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-zinc-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-400 text-sm">Por Autor • Data</p>

            {/* Alterado para usar o Link */}
            <Link
              href={`/posts/${post.id}`}
              className="mt-3 inline-block text-blue-500 hover:underline"
            >
              📖 Ler mais
            </Link>
          </div>
        ))}
      </div>

      {/* Botão para Criar Novo Post */}
      <div className="text-center mt-8">
        <Link
          href="/posts/criar"
          className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
        >
          ✍ Criar Novo Post
        </Link>
      </div>
    </div>
  );
}
