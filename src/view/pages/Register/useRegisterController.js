import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from 'react-hot-toast';

const schema = z.object({
  email: z.string().min(1, 'Preencha um e-mail para prosseguir.').email('Por favor, insira um e-mail válido para registro.'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.').max(20, 'A senha não pode exceder 20 caracteres.'),
  confirmPassword: z.string()
}).refine((f) => f.password === f.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas não coincidem.'
})

export function useRegisterController () {
  //..........


  return { handleSubmit: () => {}, register: () => {}, errors: {}, isLoading: false };
}