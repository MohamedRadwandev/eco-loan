<template>
   <b-btn variant="success" class="px-5 mb-3 mb-md-0" :href="'/Plan'" @click="pay()" target="_blank">{{quoteTypes[quoteType].text}}</b-btn>
</template>

<script>
export default {
  name:'quoteButton',
  data(){
    return {
      quoteType:"upfront",//should be provided
      quoteTypes:
      {
        'no-deposit':
          {
            text:'Accept Quote'
          },
        'upfront':
          {
            text:'Pay Deposit'
          },
        'full':
          {
            text:'Pay Now'
          }
      }
    }
  },
  methods:{
    pay(){
      $axios.post("/create-checkout-session", {
    // method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify({
      items: [
        {
          id: 1,
          quantity: 20,
        },
        {
          id: 2,
          quantity: 10,
        },
      ],
    }),
  })
    .then((res) => {
    if(res.ok) return res.json()
    return res.json().then(json=>Promise.reject(json))
    }).then(({url})=>{
        window.location = url
    })
    .catch((err) => console.log("FAILED", err.error));
    }
  }
};
</script>
