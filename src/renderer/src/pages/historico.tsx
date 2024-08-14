import { Header } from '@renderer/components/common'
import Menu from '@renderer/components/common/Menu'
import MainContent from '@renderer/components/principals/MainContent'
import RootTemplate from '@renderer/components/principals/RootTemplate'

function SalesPage(): JSX.Element {
  return (
    <div className="flex w-full">
      <Menu />
      <RootTemplate>
        <Header title="Histórico / Movimentações" />
        <MainContent></MainContent>
      </RootTemplate>
    </div>
  )
}

export default SalesPage
