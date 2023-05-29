import axios, { type Axios, type AxiosResponse } from 'axios';
import type { NetworkClient, NetworkBuilder } from './Network';
import { CODE_FAILED } from '@/constants';

export class AxiosClient implements NetworkClient {
  private readonly _instance: Axios;

  private _authorization = '';
  private _baseUrl = '';
  private _xAPIKey = '';
  private _accept = '';
  private _contentsType = '';

  constructor() {
    this._instance = axios.create();
  }

  set baseUrl(url: string) {
    this._baseUrl = url;
    this._instance.defaults.baseURL = this._baseUrl;
  }
  set authorization(value: string) {
    this._authorization = value;
    this._instance.defaults.headers.common['Authorization'] = `Bearer ${this._authorization}`;
  }
  set xAPIKey(value: string) {
    this._xAPIKey = value;
    this._instance.defaults.headers.common['x-api-key'] = this._xAPIKey;
  }

  set accept(value: string) {
    this._accept = value;
    this._instance.defaults.headers.common['accept'] = value;
  }

  set contentType(value: string) {
    this._contentsType = value;
    this._instance.defaults.headers.common['Content-Type'] = value;
  }

  async get(url: string, params?: unknown): Promise<AxiosResponse<any, any>> {
    try {
      const { data, status } = await this._instance.get(url, { params });

      if (status === CODE_FAILED) {
        throw data;
      }

      return data;
    } catch (e) {
      this.axiosError(e);
    }
  }
  async post(url: string, params?: unknown): Promise<AxiosResponse<any, any>> {
    try {
      const { data, status } = await this._instance.post(url, params);

      if (status === CODE_FAILED) {
        throw data;
      }

      return data;
    } catch (e) {
      this.axiosError(e);
    }
  }
  async put(url: string, params?: unknown): Promise<AxiosResponse<any, any>> {
    try {
      const { data, status } = await this._instance.put(url, params);

      if (status === CODE_FAILED) {
        throw data;
      }

      return data;
    } catch (e) {
      this.axiosError(e);
    }
  }
  async delete(url: string, params?: unknown): Promise<AxiosResponse<any, any>> {
    try {
      const { data, status } = await this._instance.delete(url, { params });

      if (status === CODE_FAILED) {
        throw data;
      }

      return data;
    } catch (e) {
      this.axiosError(e);
    }
  }
  async patch(url: string, params?: unknown): Promise<AxiosResponse<any, any>> {
    try {
      const { data, status } = await this._instance.patch(url, params);

      if (status === CODE_FAILED) {
        throw data;
      }

      return data;
    } catch (e) {
      this.axiosError(e);
    }
  }

  axiosError(error) {
    // const { request, response } = error;
    const { response } = error;
    // const { status: reqStatus } = request;
    // const { data, status } = response;
    const { status } = response;

    // TODO: 운영시 오픈
    // if (status === 500) {
    //   location.href = '/error/500';
    // }

    throw response;
  }
}

export default class AxiosBuilder implements NetworkBuilder {
  private readonly _instance: AxiosClient;

  constructor() {
    this._instance = new AxiosClient();
  }

  setBaseUrl(url: string): NetworkBuilder {
    this._instance.baseUrl = url;
    return this;
  }
  setAuthorization(value: string): NetworkBuilder {
    this._instance.authorization = value;
    return this;
  }
  setXAPIKey(value: string): NetworkBuilder {
    this._instance.xAPIKey = value;
    return this;
  }
  setAccept(value: string): NetworkBuilder {
    this._instance.accept = value;
    return this;
  }

  setContentType(value: string): NetworkBuilder {
    this._instance.contentType = value;
    return this;
  }

  build(): NetworkClient {
    return this._instance;
  }
}
