import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 535px;
  margin: 0 auto;
  padding: 3rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    > input {
      color: ${({ theme }) => theme['gray-300']};
      padding: 1rem;
      border: none;
      border-radius: 6px;
      background: ${({ theme }) => theme['gray-900']};

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    > button {
      color: ${({ theme }) => theme.white};
      font-weight: bold;
      margin-top: 1.5rem;
      padding: 1rem;
      border: none;
      border-radius: 6px;
      background: ${({ theme }) => theme.green};
      cursor: pointer;

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-light']};
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${({ theme }) => theme['gray-500']};
  line-height: 0;
  border: 0;
  background: 0;
  cursor: pointer;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'expense'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-300']};

  padding: 1rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme['gray-700']};
  cursor: pointer;
  transition: all 0.1s;

  &[data-state='unchecked'] {
    svg {
      color: ${({ theme, variant }) =>
        variant === 'income' ? theme['green-light'] : theme.red};
    }
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-dark'] : theme['red-dark']};
  }
`
