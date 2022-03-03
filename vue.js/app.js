const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/2.jpg', isFav: false},
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/3.jpg', isFav: true},
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(() => book.isFav)
    }
  }
})

app.mount('#app')

//challenge - Add to Favs
// -attach a click event to each li tag (for each book)
// -when a user clicks an li, toggle the 'isFav' property of that book
