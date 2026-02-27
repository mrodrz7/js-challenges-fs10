# User Intake Logic Builder

## Objective
Practice:
- Variables
- Data types
- Operators
- Conditionals (if, else if, else)

You will write a small program that evaluates a user and prints decisions to the console

## Scenario
You are building intake logic for a financial platform.

The system needs to determine:

1. If the users is eligible to open an account
2. If they qualify for a premium account
3. If they should be flagged for review

## Requirements

### Step 1 - Create Variables

Declare the following variables:

- `firstName` (string)
- `age` (number)
- `annualIncome` (number)
- `creditScore` (number)
- `isCitizen` (boolean)
- `hasCriminalRecord` (boolean)

Assign them realistic values.

### Step 2 - Basic Eligibility
A user can open account if:

- They are at least 18 years old
- They are a citizen
- They do NOT have a criminal record

Print:

- `"Account Approved"`

OR

- `"Account Denied"`

### Step 3 - Premium Qualification

A user qualifies for premium if:

- Income is greater than 100000
- Credit score is 720 or higher
- Account was approved

Print: 

- `"Premium Approved"`

OR

- `"Standard Account Only"`

### Step 4 - Risk Flag

Flag the user for manual review if:

- Credit score is below 600

OR

- Income is below 25000

Print:

- `"Flag for Review"`

OR

- `"No Risk Flags"`

## Stretch Goals (Optional)

1. Create a variable `riskLevel`:

    - `High` if credit < 550
    - `Medium` if credit between 550-650
    - `Low` otherwise

2. Use string interpolation to print: