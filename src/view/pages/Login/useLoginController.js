import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from 'react-hot-toast';

const schema = z.object({
  email: z.string().min(1, 'Preencha um e-mail para prosseguir.').email('Por favor, insira um e-mail válido para login.'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.').max(20, 'A senha não pode exceder 20 caracteres.')
});

export function useLoginController() {
  //..........

  return { handleSubmit: () => {}, register: () => {}, errors: {}, isLoading: false };
}