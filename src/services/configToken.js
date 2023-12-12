export default function ConfigToken(token){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return config;
} 