import config from './config';

const getConfigInfo = () => {
  const mode: string = import.meta.env.VITE_APP_MODE?.toString() || import.meta.env.MODE;
  const info = config[mode];
  const version = import.meta.env.VITE_APP_VERSION?.toString();

  return {
    mode,
    version,
    api: info.api,
    web: info.web,
  };
};

export default getConfigInfo();
