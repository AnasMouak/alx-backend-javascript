// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: 'Major';
}

// Define the MinorCredits interface
interface MinorCredits {
    credits: number;
    brand: 'Minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Major'
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor'
    };
}

// Example usage
const major1: MajorCredits = { credits: 5, brand: 'Major' };
const major2: MajorCredits = { credits: 3, brand: 'Major' };

const minor1: MinorCredits = { credits: 2, brand: 'Minor' };
const minor2: MinorCredits = { credits: 4, brand: 'Minor' };

const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log(totalMajorCredits);
console.log(totalMinorCredits);
