import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit';

var initialState = [
	{ id: 1, title: "Starbucks", amount: "12.00", address: "1023, London, ON"},
	{ id: 2, title: "Apple Store", amount: "101.00", address: "1023, London, ON"},
	{ id: 3, title: "Sephora", amount: "120.00", address: "1023, London, ON"},
	{ id: 4, title: "Shoppers Drug Mart", amount: "12.00", address: "1023, London, ON"},
	{ id: 5, title: "Pizza Hut", amount: "24.00", address: "1023, London, ON"},
	{ id: 6, title: "Cheesecake Factory", amount: "45.00", address: "1023, London, ON"},
	{ id: 7, title: "Nike", amount: "250.00", address: "1023, London, ON"},
	{ id: 8, title: "Tim Hortons", amount: "7.89", address: "1023, London, ON"},
	{ id: 9, title: "Whole Foods", amount: "78.00", address: "1023, London, ON"},
	{ id: 10, title: "Cineplex", amount: "42.50", address: "1023, London, ON"},
]

export const transactionSlice = createSlice({
	name: 'transaction',
	initialState: initialState,
	reducers: {

	},
})

export const selectTotalAmount = (state) => state.transaction.reduce((total, { amount }) => total + parseFloat(amount), 0);
export const selectTotalTransactions = (state) => state.transaction.length;

export const selectHighestSpending = createSelector(
	state => state.transaction,
	transactions => {
		if (transactions.length === 0) return null;
		return transactions.reduce((max, current) => {
			return parseFloat(current.amount) > parseFloat(max.amount) ? current : max;
		});
	}
);

export const selectLeastAmountTransaction = createSelector(
	state => state.transaction,
	transactions => {
		if (transactions.length === 0) return null;
		return transactions.reduce((min, current) => {
			return parseFloat(current.amount) < parseFloat(min.amount) ? current : min;
		});
	}
);


export default transactionSlice.reducer