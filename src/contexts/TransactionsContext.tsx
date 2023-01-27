import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../libs/axios'

interface Transacation {
  id: number
  type: 'income' | 'expense'
  description: string
  value: number
  category: string
  createdAt: string
}

interface NewTransaction {
  description: string
  category: string
  type: 'income' | 'expense'
  value: number
}

interface TransacionsContextType {
  transactions: Transacation[]
  loadingTransacations: boolean
  getTransactions: (query?: string) => Promise<void>
  deleteTransactionById: (id: number) => Promise<void>
  createNewTransaction: (data: NewTransaction) => Promise<void>
}

export const TransacionsContext = createContext({} as TransacionsContextType)

interface TransactionsProviderProsp {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProsp) {
  const [transactions, setTransactions] = useState<Transacation[]>([])
  const [loadingTransacations, setLoadingTransactions] = useState(false)

  async function getTransactions(query?: string) {
    setLoadingTransactions(true)

    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setTransactions(response.data)

    setLoadingTransactions(false)
  }

  async function deleteTransactionById(id: number) {
    setLoadingTransactions(true)

    await api.delete(`/transactions/${id}`)

    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id),
    )

    setLoadingTransactions(false)
  }

  async function createNewTransaction(data: NewTransaction) {
    const { description, category, type, value } = data

    setLoadingTransactions(true)

    const response = await api.post('/transactions', {
      description,
      category,
      type,
      value,
      createdAt: new Date().toISOString(),
    })

    setTransactions((prevTransactions) => [response.data, ...prevTransactions])

    setLoadingTransactions(false)
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransacionsContext.Provider
      value={{
        transactions,
        loadingTransacations,
        getTransactions,
        deleteTransactionById,
        createNewTransaction,
      }}
    >
      {children}
    </TransacionsContext.Provider>
  )
}
