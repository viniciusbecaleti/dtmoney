import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  > input {
    flex: 1;

    color: ${({ theme }) => theme['gray-100']};

    padding: 1rem;
    border: none;
    border-radius: 6px;
    background: ${({ theme }) => theme['gray-900']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  > button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme['green-light']};
    font-weight: bold;
    padding: 0.875rem 2rem;
    border: 1px solid ${({ theme }) => theme['green-light']};
    border-radius: 6px;
    background: none;
    cursor: pointer;
    transition: all 0.1s;

    &:not(:disabled):hover {
      color: ${({ theme }) => theme.white};
      border-color: ${({ theme }) => theme.green};
      background: ${({ theme }) => theme.green};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`
