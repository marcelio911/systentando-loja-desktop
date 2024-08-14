import { Header } from '@renderer/components/common'
import Menu from '@renderer/components/common/Menu'
import Cart from '@renderer/components/principals/Cart'
import MainContent from '@renderer/components/principals/MainContent'
import PaymentSummary from '@renderer/components/principals/PaymentSummary'
import ProductList from '@renderer/components/principals/ProductList'
import RootTemplate from '@renderer/components/principals/RootTemplate'

function SalesPage(): JSX.Element {
  return (
    <div className="flex w-full">
      <Menu />
      <RootTemplate>
        <Header title="Marketplaces" />
        <MainContent>
          <ProductList />
          <div className="md:w-1/3 flex  h-full flex-col">
            <Cart />
            <PaymentSummary />
          </div>
        </MainContent>
      </RootTemplate>
    </div>
  )
}

export default SalesPage
