// Function to check if a string is a palindrome
function reverse() {
    // Get the input string from the user
    var str1 = document.getElementById("firstStr").value;
    // Split the string into an array of characters
    var splitStr1 = str1.split("");
    // Reverse the array of characters
    var reverse = splitStr1.reverse();
    // Join the reversed array back into a string
    var joinStr1 = reverse.join("");
   
    // Check if the original string is equal to the reversed string
    if (str1 == joinStr1) {
        // If they are equal, display that the string is a palindrome
        document.getElementById("palin").innerHTML = "The word is a palindrome";
    } else {
        // If they are not equal, display that the string is not a palindrome
        document.getElementById("palin").innerHTML = "The word is NOT a palindrome";
    }

    // Additional string manipulations
    var sub = str1.substring(0, 3);
    var sub2 = str1.substring(3, 5);
    str1 = str1.toUpperCase();
    sub = str1.toUpperCase();
    alert("All caps: " + sub);
    sub2 = str1.replace(/qwe/i, "asd");
    alert("Replace 'qwe' with 'asd': " + sub2);
}

// Function to reverse a string using a loop 
function reverse2() {
    alert("2");
    let reversed = "";
    for (let i = str1.length - 1; i >= 0; i--) {
        reversed += str1[i]; // reversed = reversed + str1[i]
    }
    alert("Reversed string using loops: " + reversed);
}
