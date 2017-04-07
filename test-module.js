module.exports = {
  word: "bonjour",
  language: "English",
  translation: function() {
    console.log(`The ${this.language} translation of the word ${this.word} is Good Morning.`);
  }
};
