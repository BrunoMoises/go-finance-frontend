import Modal from '@/components/Modal'
import AccountsDebitForm from '../AccountsDebitForm'

export type AccountsDebitAddProps = {
    isOpen: boolean
    getValueOpen: (value: boolean) => void
}

const AccountsDebitAdd = ({ isOpen, getValueOpen }: AccountsDebitAddProps) => {
    return (
        <Modal
            title="Adicionar nova conta de débito"
            isOpen={isOpen}
            getValueOpen={getValueOpen}
        >
            <AccountsDebitForm />
        </Modal>
    )
}

export default AccountsDebitAdd
