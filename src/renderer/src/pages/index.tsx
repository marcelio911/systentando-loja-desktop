import { Carousel, Typography } from '@material-tailwind/react'

import samsungMemory from '@renderer/assets/images/backgrounds/640x961/samsung-memory--jXG8UoBJLI-unsplash.jpg'
import systentandoLogo from '@renderer/assets/images/logo-systentando.png'
import Versions from '@renderer/components/Versions'

function HomePage(): JSX.Element {
  const handleLogin = () => {
    console.log('Login')
    window.location.href = '#/vender'
  }
  return (
    <>
      <header className="header-home">
        <img alt="logo" className="logo" src={systentandoLogo} />{' '}
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-4xl p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-gray-300 mb-4">
              Simplifique o atendimento, agilize as vendas e encante seus clientes
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Traga seu negócio para a próxima era tecnológica e navegue num universo mais autônomo.
            </p>
          </div>
        </div>
      </header>

      <div className="flex flex-col bg-gray-800 items-center justify-center">
        <div className="max-w-7xl p-8 rounded-lg shadow-lg flex">
          {/* Carrossel de Marketing (Direita) */}
          <div className="w-2/3">
            {' '}
            {/* Largura 2/3 */}
            <Carousel className="rounded-xl">
              <div className="relative h-full w-full">
                <img src={samsungMemory} alt="image 1" className="h-full w-full object-cover" />
                <div className="bg-blue-800 opacity-80 absolute inset-0 grid"></div>
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-4/4 opacity-100">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-2xl md:text-3xl lg:text-4xl"
                    >
                      Chega de gastar tempo com operação ineficiente!
                    </Typography>
                    <Typography variant="lead" color="white" className="mb-12 opacity-80">
                      It is not so much for its beauty that the forest makes a claim upon men&apos;s
                      hearts, as for that subtle something, that quality of air that emanation from
                      old trees, that so wonderfully changes and renews a weary spirit.
                    </Typography>
                  </div>
                </div>
              </div>
              {/* Adicione mais slides com mensagens de marketing */}
              <div className="relative h-full w-full">
                <img src={samsungMemory} alt="image 1" className="h-full w-full object-cover" />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-4/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-2xl md:text-3xl lg:text-4xl"
                    >
                      Os dados que você precisa já estão aqui no Systentando sua loja.
                    </Typography>
                    <Typography variant="lead" color="white" className="mb-12 opacity-80">
                      It is not so much for its beauty that the forest makes a claim upon men&apos;s
                      hearts, as for that subtle something, that quality of air that emanation from
                      old trees, that so wonderfully changes and renews a weary spirit.
                    </Typography>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          {/* Formulário de Login (Esquerda) */}
          <div className="w-1/3 pl-8 ">
            <div className="flex flex-row">
              {/* Largura 1/3 e padding à direita */}
              <h2 className="text-2xl font-bold text-gray-300 mb-4">Entrar</h2>
            </div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
            />

            <div className="flex justify-center space-y-2 flex flex-col">
              <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full "
              >
                Entrar com E-mail
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">
                Google
              </button>
              {/* Adicione outros botões de login social aqui */}
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Versions />
        <div className="creator">(c) Powered by | Systentando.com 2024 </div>
      </footer>
    </>
  )
}

export default HomePage
