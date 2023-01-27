import styled from 'styled-components'

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme['gray-900']};
  border-top-color: ${({ theme }) => theme.green};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
