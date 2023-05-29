import type { NetworkBuilder } from './Network';
import Adapter from './axiosAdapter';

export function createNetwork(): NetworkBuilder {
  const builder: NetworkBuilder = new Adapter();
  return builder;
}
