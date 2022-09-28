import { Environment } from '@fxp/fxpservices';
import { aurorasit } from '../configs/appSettings.aurorasit';
import { dev } from '../configs/appSettings.dev';
import { prod } from '../configs/appSettings.prod';
import { sit } from '../configs/appSettings.sit';
import { uat } from '../configs/appSettings.uat';
import { IPartnerAppSettings } from '../interface/IPartnerAppSettings';

export const appSettings = (): IPartnerAppSettings => {
  let appSetting;
  switch (window['FxpAppSettings'].EnvironmentName) {
    case Environment.Dev: appSetting = dev; break;
    case Environment.Sit: appSetting = sit; break;
    case Environment.Uat: appSetting = uat; break;
    case Environment.AuroraSit: appSetting = aurorasit; break;
    case Environment.Prod: appSetting = prod; break;
    default: appSetting = dev; break;
  }

  return appSetting;
};
