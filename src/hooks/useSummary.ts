import { useContext } from 'react'

import { TransacionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransacionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        return {
          ...acc,
          income: acc.income + transaction.value,
          total: acc.total + transaction.value,
        }
      }

      if (transaction.type === 'expense') {
        return {
          ...acc,
          expense: acc.expense + transaction.value,
          total: acc.total - transaction.value,
        }
      }

      return acc
    },
    {
      income: 0,
      expense: 0,
      total: 0,
    },
  )

  return summary
}
