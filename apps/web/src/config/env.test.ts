import { describe, expect, it } from 'vitest';
import { readAppConfig } from './env';

const makeEnv = (values: Partial<ImportMetaEnv> = {}) =>
  ({ MODE: 'test', ...values }) as ImportMetaEnv;

describe('readAppConfig', () => {
  it('uses defaults when optional variables are missing', () => {
    expect(readAppConfig(makeEnv())).toEqual({
      appName: 'Flowboard',
      apiBaseUrl: '/api',
      enableAnalytics: false,
      mode: 'test',
    });
  });

  it('parses Vite variables and boolean flags', () => {
    expect(
      readAppConfig(
        makeEnv({
          VITE_APP_NAME: 'Preview',
          VITE_API_BASE_URL: 'https://api.example.com',
          VITE_ENABLE_ANALYTICS: 'YES',
        }),
      ),
    ).toMatchObject({
      appName: 'Preview',
      apiBaseUrl: 'https://api.example.com',
      enableAnalytics: true,
    });
  });
});
