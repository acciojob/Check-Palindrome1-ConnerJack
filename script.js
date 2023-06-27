// complete the given function

function palindrome(str){
	str = str.split(" ").join("")
	str = str.toLowerCase()
	let ans = ""
	for (let index = str.length; index >= 0 ; index--) {
		ans = ans + str.charAt(index)
	}

	if (str == ans) {
		return true
	} else {
		return false
	}

}
module.exports = palindrome
