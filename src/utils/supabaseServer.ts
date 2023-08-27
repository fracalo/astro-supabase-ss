import { createClient } from "@supabase/supabase-js"

import { supabaseUrl, supabaseAnonKey } from "./config"

// to be used on server
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {auth: { persistSession: false } })

export const getUser = async (arg: {
    accessToken: string | undefined,
    refreshToken: string | undefined,
}) => {
    const {accessToken, refreshToken } = arg

    try {
        if (!accessToken) throw "No accessToken"
        if (!refreshToken) throw "No refreshToken"
        
        //@todo retrieve also the email of the user
        await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
        })
        
          
        const sessionReq = await supabase.auth.getSession()
        const user = sessionReq?.data?.session?.user
        
        if (!user) throw "No user"
        const { data, error } = await supabase
            .from("profiles")
            .select("username, website, avatar_url")
            .eq("id", user.id)
            .single()
        
        if (error) throw error
        const { id, email, phone } = user
        return {
            ...data,
            id,
            email,
            phone
        }
    } catch (e) {
        console.log(e)
        return undefined
    }
}

