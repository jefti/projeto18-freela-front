export default function ConfigToken(token){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        //console.log(config);
        return config;
} 