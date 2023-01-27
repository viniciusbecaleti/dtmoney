import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import {
  DeleteButton,
  PriceHighligth,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

import { TransacionsContext } from '../../contexts/TransactionsContext'

import { currencyFormatter, dateFormatter } from '../../utils/formatter'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { Loading } from '../../components/Loading'

export function Home() {
  const { loadingTransacations, transactions, deleteTransactionById } =
    useContext(TransacionsContext)

  function handleDeleteTransaction(id: string) {
    deleteTransactionById(id)
  }

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        {loadingTransacations ? (
          <Loading />
        ) : (
          <TransactionsTable>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td width="45%">{transaction.description}</td>
                  <td>
                    <PriceHighligth variant={transaction.type}>
                      {transaction.type === 'expense' && '- '}
                      {currencyFormatter.format(transaction.value)}
                    </PriceHighligth>
                  </td>
                  <td>{transaction.category}</td>
                  <td style={{ textAlign: 'right' }}>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td>
                    <DeleteButton
                      type="button"
                      onClick={() => handleDeleteTransaction(transaction.id)}
                    >
                      <Trash size={20} />
                    </DeleteButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </TransactionsTable>
        )}
      </TransactionsContainer>
    </>
  )
}
