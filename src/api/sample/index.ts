import config from '@/config';
import { createNetwork } from '@/lib/network';
import { SampleDocs, type APIPostListParams } from '@/api/sample/sample.api.types';

export const sampleAPI = () => {
  const BASE_URL = config.api.sample;

  const _network = createNetwork().setBaseUrl(BASE_URL).build();

  const getPostList = (params: APIPostListParams = {}) => {
    return _network.get(SampleDocs.postList(), { ...params });
  };

  const getPostDetail = (id: number) => {
    const _network = createNetwork().setBaseUrl('sample').build();
    return _network.get(SampleDocs.postDetail(id.toString()));
  };

  return {
    getPostList,
    getPostDetail,
  };
};
