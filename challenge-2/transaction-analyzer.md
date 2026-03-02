# In-Class Challenge: Transaction Analyzer

## Objective

Practice:

- Functions
- Parameters & return values
- Loops (`for` or `while`)
- Conditionals
- Accumulators

You will build a small transaction analyzer for a banking system.

## Scenario

You are given a list of transactions (positive number = deposits, negative numbers = withdrawals)

Your program must: 

1. Calculate total balance
2. Count total deposits
3. Count total withdrawals
4. Detect syspicious activity
5. Print a summary

## Step 1 - Create the Data

Create an array called `transactions` with at least 8 numbers

Example:

`const transactions = [250, -100, 400, -50, -300, 1200, -20, 75]`

You may use your own values.

## Step 2 = Build these functions

1. `calculateBalance` (transactions)
    - Loop through the array
    - Add all values together
    - Return the total balance

2. `countDeposits` (transactions)
    - Loop through the array
    - Count how many numbers are greater than 0
    - Return the count

3. `countWithdrawals` (transactions)
    - Loop through the array
    - Count how many numbers are less than 0
    - Return the count

4. `detectLargeWithdrawal` (transactions)
    - If any withdrawal is less than -500
    - Return `Suspicious Activity Detected`
    - Otherwise return `No Suspicious Activity`

## Step 3 - Use the Functions

Store the returned values in variables:

- `balance`
- `depositCount`
- `withdrawalCount`
- `securityStatus`

## Step 4 - Print Summary

Output something like:

```
Account Summary
---------------
Balance: 1455
Deposits: 4
Withdrawals: 4
Security Status: No Suspicious Activity
```

## Rules

- Must use at least one loop inside each function
- Functions must return values (not just console.log)
- No built-in methods like `.reduce()`
- Use conditionals properly
- Clean indentation

---

## Stretch Goals (Optional)

1. Create a function `getAverageTransaction(transactions)`
2. Create a function `getLargestDeposit(transactions)`
3. Modify `detectLargeWithdrawal` to stop looping immediately once suspicious activity is found


## Deliverable

Submit a single `.js` file that:

- Runs without errors
- Calls every function
- Prints a formatted summary