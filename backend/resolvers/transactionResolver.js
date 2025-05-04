import Transaction from "../models/transactionModel.js"
import User from "../models/userModel.js";

const transactionResolver = {
    Query:{
        transactions: async (_, __, context) => {
            try {
                if(!context.getUser()){
                    throw new Error("Unauthorized")
                }

                const userId = await context.getUser()._id;

                const transactions = await Transaction.find({ userId });
                return transactions;
            } catch (err) {
                console.error("Error in getting transactions: ", err);
                throw new Error("Error getting transactions")
            }
        },

        transaction: async (_, { transactionId }) => {
            try {
                const transaction = await Transaction.findById(transactionId);
                return transaction
            } catch (err) {
                console.error("Error in getting transaction: ", err);
                throw new Error("Error getting transaction")
            }
        },

        categoryStatistics: async (_, __, context) => {
            if(!context.getUser()) throw new Error("Unauthorized");
            
            const userId = context.getUser()._id;
            const transactions = await Transaction.find({ userId });
            const categoryMap = {};

			transactions.forEach((transaction) => {
				if (!categoryMap[transaction.category]) {
					categoryMap[transaction.category] = 0;
				}
				categoryMap[transaction.category] += transaction.amount;
			});


			return Object.entries(categoryMap).map(([category, totalAmount]) => ({ category, totalAmount }));
        },

    },

    Mutation:{
        createTransaction: async (_, {input}, context) => {
            try {
                const newTransaction = new Transaction({
                    ...input,
                    userId: context.getUser()._id
                });

                await newTransaction.save();
                return newTransaction;
            } catch (err) {
                console.error("Error in getting transaction: ", err);
                throw new Error("Error getting transaction");
            }
        },

        updateTransaction: async (_, {input}) => {
            try {
                const updatedTransaction = await Transaction.findByIdAndUpdate(input.transactionId, input, {new:true});
                return updatedTransaction;                                
            } catch (err) {
                console.error("Error in getting transaction: ", err);
                throw new Error("Error getting transaction");
            }
        },

        deleteTransaction: async (_, {transactionId} ) => {
            try {
                const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
                return deletedTransaction;
            } catch (err) {
                console.error("Error in getting transaction: ", err);
                throw new Error("Error getting transaction");
            }
        },
    },

    Transaction:{
      user: async(parent) => {
        const userId = parent.userId;
        try {
            const user = await User.findById(userId);
            return user;
        } catch (error) {
            console.error("Erorr getting user: ", user);
            throw new Error("Error getting User");
        }
      }
    }
};

export default transactionResolver;