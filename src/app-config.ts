import { IHttpConfig } from "./app/core/models/http-config.interface";
import { environment } from "./environments/environment";

export const CONFIG = <IHttpConfig> {
  interceptUrls: {
      'api://': {
          root: environment.root_api_url,
          isAuth: true,
          headers: {},
      },
      'userapi://': {
        root: environment.user_api_url,
        isAuth: true,
        headers: {}
      },
      'authapi://': {
        root: environment.authority,
        isAuth: false,
        headers: {}
      }
  },
  authConfig: {
    authority: environment.authority,
    signin_url: environment.authority + '/generateToken',
    signout_url: environment.authority + 'logout',
    auth_check: environment.authority + 'check'
  },
  propertiesFile: null
};