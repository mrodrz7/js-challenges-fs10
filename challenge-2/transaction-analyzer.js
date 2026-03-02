const transactions = [-24, 7, 55, 2000, -10, -579, 100, 547]

function calculateBalance() {
    let totalBalance = 0;
    for (let i = 0; i < transactions.length; i++) {
        totalBalance += transactions[i];
    }
    return totalBalance;
} 

let balance = calculateBalance()

function countDeposits() {
    let count = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i] > 0) {
            count++
        }
    }
    return count;
}

let depositCount = countDeposits()

function countWithdrawals() {
    let count = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i] < 0) {
            count++
        }
    }
    return count;
} 

let withdrawalCount = countWithdrawals()

function detectLargeWithdrawal() {
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i] < -500) {
            return "Suspicious Activity Detected"
        }
    }
    return "No Suspicious Activity"
}

let securityStatus = detectLargeWithdrawal()

console.log(`Account Summary\n ---------------\n Balance: ${balance}\n Deposits: ${depositCount}\n Withdrawals: ${withdrawalCount}\n Security Status: ${securityStatus}`)