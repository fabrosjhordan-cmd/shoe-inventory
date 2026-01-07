import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../src/supabaseClient'

const AuthContext = createContext({
  session: undefined,
  profile: null,
  loading: true
})

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(undefined)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const hydrate = async () =>{
        const { data } = await supabase.auth.getSession();
        setSession(data.session)
        setHydrated(true)
        setLoading(false)
    }

    hydrate()

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, newSession) => {
        setSession(newSession)

        if (hydrated && newSession?.user) {
          setLoading(true)

          const { data: profileData } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', newSession.user.id)
            .single()

          setProfile(profileData || null)
          setLoading(false)
        } else {
          setProfile(null)
          setLoading(false)
        }
      }
    )

    return () => listener.subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ session, profile, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
