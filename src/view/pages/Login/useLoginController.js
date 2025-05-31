import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
// import { authService } from '../../../app/services/authService';
// import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
// import { useAuth } from '../../../app/hooks/useAuth';

const schema = z.object({
  email: z.string().min(1, 'Please enter an email address for login.').email('Please enter a valid email address for login.'),
  password: z.string().min(8, 'Password must be at least 8 characters long.').max(20, 'Password must not exceed 20 characters.')
});

export function useLoginController() {
  // const {
  //   handleSubmit: hookFormHandleSubmit,
  //   register,
  //   formState: { errors }
  // } = useForm({
  //   resolver: zodResolver(schema)
  // });

  // const { mutateAsync, isLoading } = useMutation({
  //   mutationFn: async (data) => {
  //     return authService.login(data);
  //   }
  // });

  // const { signin } = useAuth();

  // const handleSubmit = hookFormHandleSubmit(async (data) => {
  //   try {
  //     const { accessToken } = await mutateAsync(data);

  //     signin(accessToken);
  //   } catch {
  //     toast.error('Login failed. Please check your email and password.');
  //   }
  // });

  // return { handleSubmit, register, errors, isLoading };
  return { handleSubmit: () => {}, register: () => {}, errors: {}, isLoading: false };
}