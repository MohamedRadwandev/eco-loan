

export default function ({ $axios, $cookies, req }) {


     $axios.onRequest(config => {

          const token = $cookies.get('token', { fromRes: true });

          if (!req && !token) {
               // re run Nuxt ServerInit to get new token 
               // location.reload();
          }

          if (token) {
               config.headers.common['Authorization'] = `Bearer ${token}`;
          }

          return config;
     })
}