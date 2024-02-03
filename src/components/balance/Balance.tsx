import './balance.css'

interface Props {
  cryptoBalance: string
  equivalentInEuro: string
}

const Balance = ({cryptoBalance, equivalentInEuro}: Props) => {
  return (
    <div className='flex-column balance '>
        <h1>
            {cryptoBalance} sats
        </h1>
            <h2>
                {equivalentInEuro} €
            </h2>
    </div>
  )
}

export default Balance