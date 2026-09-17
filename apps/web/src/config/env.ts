export interface AppConfig {
  appName: string;
  apiBaseUrl: string;
  enableAnalytics: boolean;
  mode: string;
}

function parseBoolean(value: string | undefined, fallback = false) {
  if (value === undefined) return fallback;
  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
}

export function readAppConfig(env: ImportMetaEnv): AppConfig {
  return {
    appName: env.VITE_APP_NAME?.trim() || 'Flowboard',
    apiBaseUrl: env.VITE_API_BASE_URL?.trim() || '/api',
    enableAnalytics: parseBoolean(env.VITE_ENABLE_ANALYTICS),
    mode: env.MODE,
  };
}

export const appConfig = readAppConfig(import.meta.env);
