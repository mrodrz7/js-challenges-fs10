let firstName = "John"
let age = 34
let annualIncome = 50000
let creditScore = 650
let isCitizen = true
let hasCriminalRecord = false
let accountStatus = false;

if (age >= 17 && isCitizen && !hasCriminalRecord) {
    accountStatus = true;
    console.log("Account Approved")
} else {
    console.log("Account Denied")
}

if (annualIncome > 100000 && creditScore >= 720 && accountStatus) {
    console.log("Premium Approved")
} else {
    console.log("Standard Account Only")
}

if (creditScore < 600 || annualIncome < 25000) {
    console.log("Flag for Review")
} else {
    console.log("No Risk Flags")
}

let riskLevel;

if (creditScore < 550) {
    riskLevel = "High"
} else if (creditScore >= 550 && creditScore <= 650) {
    riskLevel = "Medium"
} else {
    riskLevel = "Low"
}

console.log(`${firstName}, your credit risk level is ${riskLevel}`)