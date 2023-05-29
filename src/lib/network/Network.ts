export interface NetworkClient {
  get(url: string, params?: unknown): Promise<any>;
  post(url: string, params?: unknown): Promise<any>;
  put(url: string, params?: unknown): Promise<any>;
  delete(url: string, params?: unknown): Promise<any>;
  patch(url: string, params?: unknown): Promise<any>;
}

export interface NetworkBuilder {
  setBaseUrl(url: string): NetworkBuilder;
  setAuthorization(value: string): NetworkBuilder;
  setXAPIKey(value: string): NetworkBuilder;
  setAccept(value: string): NetworkBuilder;
  setContentType(value: string): NetworkBuilder;

  build(): NetworkClient;
}
