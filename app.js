var app = new Vue({
    el: '#app',
    data: {
      message: 19999
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  })
