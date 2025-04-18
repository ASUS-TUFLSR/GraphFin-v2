import {gql} from '@apollo/client'

export const CREATE_TRANSACTION = gql`
       mutation CreateTransaction($input: CreateTransactionInput!){
          createTransaction(input: $input){
            _id
            description
            paymentType
            category
            amount
            location
            date
          }
       }
`

export const UPDATE_TRANSACTION = gql`
       mutation UpdateTransaction($input: UpdateTransactionInput!){
        updatedTransaction(input: $input){
            _id
            description
            paymentType
            category
            amount
            location
            date
        }
       }
`

export const DELETE_TRANSACTION = gql`
       mutation DeleteTransaction($transactionId: ID!){
        deletedTransaction(transactionId: $transactionId){
           _id
        }
       }
`