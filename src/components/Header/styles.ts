import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme['gray-900']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: calc(1120px + 1.5rem);
  margin: 0 auto;
  padding: 0 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransaction = styled.button`
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.green};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['green-light']};
  }
`
