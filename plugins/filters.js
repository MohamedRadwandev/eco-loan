import Vue from 'vue';




Vue.filter('emptyDash', value => {

     return value != null && value != "" ? value : "--";
});

Vue.filter('money', function (value) {
     if (typeof value !== "number") {
          return value;
     }
     var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
     });
     return formatter.format(value);
});