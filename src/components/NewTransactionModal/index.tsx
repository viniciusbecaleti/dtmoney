import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

import { TransacionsContext } from '../../contexts/TransactionsContext'

const createNewTransactionFormSchema = z.object({
  description: z.string(),
  value: z.number(),
  category: z.string(),
  type: z.enum(['income', 'expense']),
})

type createNewTransactionFormInputs = z.infer<
  typeof createNewTransactionFormSchema
>

interface NewTransactionModalProps {
  closeModal: () => void
}

export function NewTransactionModal({ closeModal }: NewTransactionModalProps) {
  const { createNewTransaction } = useContext(TransacionsContext)

  const { register, handleSubmit, control, reset } =
    useForm<createNewTransactionFormInputs>({
      resolver: zodResolver(createNewTransactionFormSchema),
      defaultValues: {
        description: '',
        value: 0,
        category: '',
        type: undefined,
      },
    })

  function handleCreateNewTransaction(data: createNewTransactionFormInputs) {
    const { description, category, type, value } = data

    createNewTransaction({
      description,
      category,
      type,
      value,
    })

    reset()
    closeModal()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />

          <input
            type="text"
            placeholder="Preço"
            {...register('value', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="expense" value="expense">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
