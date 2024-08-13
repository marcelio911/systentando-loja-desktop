import 'reflect-metadata'

import { app, dialog } from 'electron'
import log from 'electron-log'

import { NestFactory } from '@nestjs/core'

import { AppModule } from '@main/modules/app/app.module'
import { ElectronService } from '@main/modules/electron/electron.service'
import { UpdateService } from '@main/modules/update/update.service'

const bootstrap = async () => {
  try {
    const app = await NestFactory.createApplicationContext(AppModule)

    const updateService = app.get(UpdateService)
    const electronService = app.get(ElectronService)

    await updateService.autoUpdate()
    await electronService.start()
  } catch (error: any) {
    log.error('Failed to bootstrap application')
    log.error(error?.message, error)

    await app.whenReady()

    if (error?.message === 'unable to verify the first certificate') {
      dialog.showErrorBox(
        'Erro ao iniciar o aplicativo',
        `O aplicativo não pode ser executado devido a um erro de certificado.\nSe um aplicativo que altera a rede estiver em execução, exclua-o. (Exemplo: Unicorn Pro)\nPara registros detalhados, ${
          log.transports.file.getFile().path
        }`,
      )
    } else {
      dialog.showErrorBox(
        'Erro ao iniciar o aplicativo',
        `${error?.message}\nO registro detalhado é ${log.transports.file.getFile().path}`,
      )
    }

    process.exit(1)
  }
}

bootstrap()
