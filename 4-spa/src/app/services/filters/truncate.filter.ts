import { Pipe, PipeTransform } from 'angular-ts-decorators';
 
@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  public transform(text: string, length: number, end: string) {
    if (isNaN(length)) {
      length = 10;
    }

    if (end === undefined) {
      end = '...';
    }

    if (text.length <= length || text.length - end.length <= length) {
      return text;
    } else {
      return String(text).substring(0, length - end.length) + end;
    }
  }
}