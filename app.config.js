export default ({ config }) => {
    return {
        ...config,
        extra: {
            apiUrl: process.env.API_URL ?? 'http://192.168.15.124:3333',
            eas: {
                projectId: "8f02e9d3-697a-4ed4-a1cb-44630b2a96d2"
            }   
        }
    }
}
