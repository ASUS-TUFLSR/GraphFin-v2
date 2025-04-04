import Transaction from "../models/transactionModel.js"

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

        // add category statistics query
    },

    Mutation:{
        createTransaction: async (_, {input}, context) => {
            try {
                const newTransaction = new Transaction({
                    ...input,
                    userId: context.getUser()._id
                });

                await newTransaction.save();
            } catch (err) {
                console.error("Error in getting transaction: ", err);
                throw new Error("Error getting transaction");
            }
        },

        updateTransaction: async (_, {input}) => {
            try {
                const updatedTransaction = Transaction.findByIdAndUpdate(input.transactionId, input, {new:true});
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
    // add transaction/user relationship
};

export default transactionResolver;