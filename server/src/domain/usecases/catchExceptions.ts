import { AppException, ExceptionContext } from '../exceptions/app.exception';
import { UnexpectedException } from '../exceptions/unexpected.exception';

export const CatchExceptions = (
  exception: any,
  context: ExceptionContext[] = [],
  service?: string,
) => {
  if (exception instanceof AppException) throw exception;
  throw new UnexpectedException(context, service);
};
