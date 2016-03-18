// def break_words(stuff):
// 	"""This function will break up words for us."""
// 	words = stuff.split(' ')
// 	return words
// 	
// def sort_words(words):
// 	"""Sorts the words."""
// 	return sorted(words)
// 	
// def print_first_word(words):
// 	"""Prints the first word after popping it off."""
// 	word = words.pop(0)
// 	print word
// 	
// def print_last_word(words):
// 	"""Prints the last word after popping it off."""
// 	word = words.pop(-1)
// 	print word
// 	
// def sort_sentence(sentence):
// 	"""Takes in a full sentence and returns the sorted words."""
// 	words = break_words(sentence)
// 	return sort_words(words)
// 	
// def print_first_and_last(sentence):
// 	"""Prints the first and last words of the sentence."""
// 	words = break_words(sentence)
// 	print_first_word(words)
// 	print_last_word(words)
// 	
// def print_first_and_last_sorted(sentence):
// 	"""Sorts the words then prints the first and last one."""
// 	words = sort_sentence(sentence)
// 	print_first_word(words)
// 	print_last_word(words)
// 	
function breakWords(stuff) {
    var words = stuff.split(' ');
    return words;
}
function sortWords(words) {
    return sorted(words);
}
function printFirstWord(words) {
    var word = words.pop(0);
    console.log(word);
}
function printLastWord(words) {
    var words = words.pop(-1);
    console.log(word);
}
function sortSentence(sentence) {
    var words = breakWords(sentence);
    return sortWords(words);
}
function printFirstAndLast(sentence) {
    var words = breakWords(sentence);
    printFirstWord(words);
    printLastWord(words);
}
function printFirstAndLastSorted(sentence) {
    var words = sortSentence(sentence);
    printFirstWord(words);
    printLastWord(words);
}
