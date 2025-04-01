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
        createTransaction: async (parents, args, context) => {},
        updateTransaction: async (parents, args, context) => {},
        deleteTransaction: async (parents, args, context) => {},
    }
}

export default transactionResolver;