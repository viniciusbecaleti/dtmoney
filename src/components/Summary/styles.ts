import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: calc(1120px + 1.5rem);
  margin: 0 auto;
  padding: 0 0.75rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.article<SummaryCardProps>`
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 6px;
  background: ${({ theme, variant }) =>
    variant === 'green' ? theme['green-dark'] : theme['gray-600']};

  > header {
    display: flex;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme['gray-300']};
      line-height: 1.4;
    }
  }

  > strong {
    display: block;
    font-size: 2rem;
    line-height: 1.4;
    margin-top: 0.75rem;
  }
`
