function parseShortWeekday(d, string, i) {
    // Define an array of short weekday names
    const shortWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Extract the substring from the input string starting at index i
    const substring = string.substr(i, 3);

    // Find the index of the substring in the shortWeekdays array
    const dayIndex = shortWeekdays.indexOf(substring);

    // If the substring is a valid short weekday name
    if (dayIndex !== -1) {
        // Set the parsed day to the date object d
        d.setDay(dayIndex);
    } else {
        // Handle invalid input (e.g., throw an error or return a specific value)
        throw new Error("Invalid weekday abbreviation");
    }

    // Return the new index after the parsed part of the string
    return i + 3;
}

// Example usage
let date = new Date();
console.log(date); // Original date

try {
    const newIndex = parseShortWeekday(date, "Today is Wed", 9);
    console.log(date);  // Updated date with the correct weekday
    console.log(newIndex); // Next index after the parsed substring
} catch (error) {
    console.log(error.message); // Handle any errors
}
