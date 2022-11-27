export const actions = {
     async nuxtServerInit(_, { $axios, $config, $cookies }) {

          const token = $cookies.get('token', { fromRes: true });

          if (token) return;

          const payload = {
               grant_type: 'client_credentials',
               scope: '*',
               client_id: $config.client_id,
               client_secret: $config.client_secret
          }
          await $axios.post('oauth/token', payload).then(data => {

               $cookies.set('token', data.data.access_token, {
                    path: '/',
                    maxAge: 60 * 60 // 1 Hour
               })


          });
     }
}