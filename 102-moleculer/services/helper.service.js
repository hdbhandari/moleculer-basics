"use strict"

module.exports = {
  name: "helper",
  actions: {
    welcome: {
      rest: {
        method: "GET",
        path: "/welcome"
      },
      async handler() {
        return "Welcome From custom Service"
      }
    },

    welcomeOf: {
      /* rest: {
        method: "GET",
        path: "/welcomeOf"
      }, */
      rest: "/welcomeOf",
      params: {
        name: "string"
      },
      async handler(ctx) {
        return `Very much welcome ${ctx.params.name}`
      }
    }
  },
  events:{
    "hel"
  }
}