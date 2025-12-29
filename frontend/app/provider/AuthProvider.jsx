import {  createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../src/supabaseClient';

const AuthContext = createContext({
    session: null,
    profile: null,
    loading: true
})

export default function AuthProvider({children}) {
const [session, setSession] = useState(null)
const [profile, setProfile] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchSession = async () =>{
        setLoading(true);
        const { user } =session

        const {data: {session}} = await supabase.auth.getSession();
        setSession(session);
        if(session){
            const {data, error} = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single()
            if(!error){
                setProfile(data)
            }else{
                setProfile(null)
            }
        }else{
            setProfile(null);
        }
        setLoading(false);
    }

    fetchSession()

    const {data: listener} = supabase.auth.onAuthStateChange(async (_event, session)=>{
        const { user } =session
        setSession(session);
        if(session){
            setLoading(true)
        const {data} = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
        setProfile(data || null)
        setLoading(false)
        }else{
            setProfile(null)
            setLoading(false)
        }
    })

    return () => listener.subscription.unsubscribe();
}, [])


return (
<AuthContext.Provider value={{session, profile, loading}}>
    {children}
</AuthContext.Provider>
)
}

export const useAuth = () => useContext(AuthContext)

//   useEffect(() => {
//     let ignore = false
//     async function getProfile(){
//         setLoading(true)
//         const { user } = session

//         const { data , error } = await supabase
//         .from('profiles')
//         .select(`*`)
//         .eq('id', user.id)
//         .single()

//         if(!ignore){
//             if(error){
//                 console.warn(error);
//             } else if(data){
//                 setProfile(data)
//             }
//         }
//     }
//     getProfile()

//     return() =>{
//         ignore = true
//     }
   
//   }, [session])
  


