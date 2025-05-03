'use client';

import { useEffect } from "react";
import { axiosAuth } from "../axios";
import { createFrontendClient } from "../../utils/supabase/client";

const useAxiosAuth = () => {
    const supabase = createFrontendClient();

    useEffect(() => {
        const requestIntercept = axiosAuth.interceptors.request.use(async (config) => {
            const { data: session } = await supabase.auth.getSession();
            let accessToken = session?.session?.access_token;

            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `bearer ${accessToken}`
            }
            return config;
        },
            (error) => Promise.reject(error)
        );
        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept);
        }
    }, [])

    return axiosAuth;
}

export default useAxiosAuth;