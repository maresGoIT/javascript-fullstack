/*
## Example 2 - Function callback

Add methods `withdraw(amount, onSuccess, onError)` to the `account` object and
`deposit(amount, onSuccess, onError)`, where the first parameter is the amount of the operation, and
second and third are callbacks.

The `withdraw` method raises onError if amount is greater than TRANSACTION_LIMIT or
this.balance, and onSuccess otherwise.
`deposit` method raises onError if amount is greater than TRANSACTION_LIMIT or less
or either zero and onSuccess otherwise.*/
const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
  // withdraw(100, handleSuccess, handleError);
  withdraw(amount, onSuccess, onError) {
    // amount = 100
    // onSuccess = handleSuccess
    // onError = handleError
    // 100 > 1000
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      // 100 > 400
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

// `Account balance: 300`
function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}

// `Amount can't exceed account balance of ${this.balance} credits`
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
