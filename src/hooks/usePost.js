import { useNavigate } from "react-router-dom";
import useFlashMessage from "./useFlashMessage";
import api from "../utils/api";

export default function usePost() {
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();

  async function writePost(text) {
    let msgText = 'Post enviado';

    try {
      await api.post('/posts/write', { text });
      navigate('/'); 
    } catch (error) {
      msgText = error.response.data.message || 'Erro ao enviar o post';
    }

    setFlashMessage(msgText); 
  }

  return { writePost };
}
