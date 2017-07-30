
import { SubscriptionResult } from './results/subscription.result.model';

export interface Subscription {
  currentPage: number;
  pageSize: number;
  result: Array<SubscriptionResult>;
  totalNum: number;
  totalPage: number;
}