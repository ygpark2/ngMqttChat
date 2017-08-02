import { TopicResult } from './results/topic.result.model';


export interface Topic {
  currentPage: number;
  pageSize: number;
  result: Array<TopicResult>;
  totalNum: number;
  totalPage: number;
}