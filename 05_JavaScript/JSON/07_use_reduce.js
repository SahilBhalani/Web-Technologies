const expenses = [
    {item: "Food" , amount: 200},
    {item: "Travel", amount: 500},
    {item: "Shopping", amount: 500}
];

const total = expenses.reduce((sum , x) => sum + x.amount, 0);

console.log("Total: ", total);