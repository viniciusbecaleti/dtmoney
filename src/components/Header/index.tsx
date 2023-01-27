import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransaction } from './styles'

import logoImg from '../../assets/logo.svg'

import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <a href="/">
          <img src={logoImg} alt="" />
        </a>

        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Dialog.Trigger asChild>
            <NewTransaction type="button">Nova transação</NewTransaction>
          </Dialog.Trigger>
          <NewTransactionModal closeModal={closeModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
