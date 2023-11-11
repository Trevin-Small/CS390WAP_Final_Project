import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function useGetAllRecipes(options) {
  return useQuery({
    ...options,
    queryKey: ['all_recipes'],
    async queryFn() {
      return (await Axios.get("http://localhost:8000/get_recipes/all")).data;
    },
  });
}
