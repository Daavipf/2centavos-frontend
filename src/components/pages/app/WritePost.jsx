import { useState } from 'react';
import usePost from '../../../hooks/usePost';

export default function WritePost() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false); // Estado para gerenciar o loading
  const { writePost } = usePost();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); // Ativa o estado de loading
    await writePost(text); // Aguarda a função assíncrona
    setText(""); // Limpa o campo após o post ser enviado
    setLoading(false); // Desativa o estado de loading
  }

  return (
    <main className="">
      <h2 className='text-gray-600 text-lg'>Sobre o que você quer falar?</h2>
      <form onSubmit={handleSubmit} className='mt-8 flex flex-col items-center gap-8'>
        <textarea
          name="text"
          id="text"
          rows={6}
          onChange={(e) => setText(e.target.value)}
          value={text} // Controla o valor do textarea pelo estado
          className='w-full rounded-lg border-slate-300'
          disabled={loading} // Desabilita o campo durante o envio
        ></textarea>
        <button
          type='submit'
          className={`w-4/5 p-2.5 rounded-full shadow bg-amber-600 text-white font-semibold ${loading ? 'opacity-50' : ''}`} // Ajusta o botão durante o loading
          disabled={loading} // Desabilita o botão durante o envio
        >
          {loading ? 'Publicando...' : 'Publicar'} {/* Muda o texto do botão durante o envio */}
        </button>
      </form>
    </main>
  );
}
