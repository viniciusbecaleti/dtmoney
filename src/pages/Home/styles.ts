import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: calc(1120px + 1.5rem);
  margin: 0 auto;
  padding: 0 0.75rem;

  margin-top: 4rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  color: ${({ theme }) => theme['gray-300']};

  td {
    padding: 1.25rem;
    background: ${({ theme }) => theme['gray-700']};

    &:first-child {
      padding-left: 2rem;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
      padding-right: 2rem;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighligthProps {
  variant: 'income' | 'expense'
}

export const PriceHighligth = styled.span<PriceHighligthProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme['green-light'] : theme.red};
`

export const DeleteButton = styled.button`
  color: ${({ theme }) => theme['gray-300']};
  line-height: 0;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    color: ${({ theme }) => theme.red};
  }
`
