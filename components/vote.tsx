import Footer from './footer'
import Header from './header'
import Logo from './logo'
import Meta from './meta'
import NavCards from './nav_cards'
import { Akshar } from '@next/font/google'
import Network from './network'

const akshar = Akshar({ subsets: ['latin'] })

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const onClicked = () =>
{
    const formData = new FormData()
    formData.append('ballotSubmitDetails.email', '')
    formData.append('nomineeSubcategories[0].active', 'true')
    formData.append('nomineeSubcategories[0].categoryId', '849')
    formData.append('nomineeSubcategories[0].categoryName', 'Services')
    formData.append('nomineeSubcategories[0].id', '466541')
    formData.append('nomineeSubcategories[0].nomineeName', 'Balanced Solutions Software')
    formData.append('nomineeSubcategories[0].subcategoryId', '20196')
    formData.append('nomineeSubcategories[0].subcategoryName', 'IT / Technical Services')

    const result = fetch('https://www.vote352.com/api/ballots/90/submit-ballot',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryqbmAQdosxJMjmNGA',
        },
        body: formData,
        credentials: 'omit',
        mode: 'no-cors'
    }).then((x) => {
        console.log(x)
        console.log(x.status)
    })
}

const Vote = ({ children }: Props) => {
  return (
    <>
        <button type='button' onClick={() => onClicked()}>Vote for Us!</button>
    </>
  )
}

export default Vote
