import * as format from 'date-fns/format';

export class ScmSharedUtil {
  static getCurrentDate() {
    return format(new Date(), 'YYYY-MM-DD');
  }

  static getCurrentDateTime() {
    return format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  }
}
