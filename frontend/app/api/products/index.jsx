import { supabase } from "../../src/supabaseClient";
import { useQuery } from "@tanstack/react-query";

export const useProductList = () =>{
    
  return useQuery({
    queryKey: ['products'],
    queryFn: async () =>{
        const { data, error } = await supabase.from('products').select('*').order('id', {ascending: true});
        if(error){
          throw new Error(error.message);
        }
        return data;
    }
  });
}