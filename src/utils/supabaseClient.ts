import { createClient } from "@supabase/supabase-js";

import { supabaseUrl, supabaseAnonKey, accessTokenName} from './config'
// to be used on client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getUser = async (accessToken?: string, refreshToken?: string) => {
    try {
        if (!accessToken) throw 'No accessToken'
        if (!refreshToken) throw 'No refreshToken'
        
        await supabase.auth.setSession({
          refresh_token: refreshToken,
          access_token: accessToken,
          auth: { persistSession: false },
        })
        
          
        const userReq = await supabase.auth.getUser(accessToken);
        const {data: { user }} = userReq
        
        if (!user) throw 'No user'
        let { data, error } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', user.id)
                .single()
        
        if (error) throw error
        return data
    } catch (e) {
        console.log(e)
        return undefined
    }
}
