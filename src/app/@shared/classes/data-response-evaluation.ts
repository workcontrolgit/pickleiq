import { Evaluation } from '@shared/models/evaluation';

export interface DataResponseEvaluation {
  succeeded: boolean;
  message: string;
  errors: string;
  data: Evaluation;
}
