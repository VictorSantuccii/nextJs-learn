// loading.tsx

'use client';

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-white border-t-transparent rounded-full" role="status">
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );
}
