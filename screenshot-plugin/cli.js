const screenshot = require('./screenshot')

;(async function() {
  await screenshot(
    [
      [
        'writing/waterfall',
        'Short text'
      ]
      // ['writing', "swyx's Blogposts and Writing"],
      // ['speaking', "swyx's Talks and Podcasts"]
      // [
      //   'plsignore',
      //   "JAMstack or 'Pilha de Atolamento'? Let Your User Decide",
      //   'i18n in Gatsby + Netlify'
      // ]
    ],
    // false
    true
  )
})()
