// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Major'
    };
}
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor'
    };
}
// Example usage
var major1 = { credits: 5, brand: 'Major' };
var major2 = { credits: 3, brand: 'Major' };
var minor1 = { credits: 2, brand: 'Minor' };
var minor2 = { credits: 4, brand: 'Minor' };
var totalMajorCredits = sumMajorCredits(major1, major2);
var totalMinorCredits = sumMinorCredits(minor1, minor2);
console.log(totalMajorCredits);
console.log(totalMinorCredits);
