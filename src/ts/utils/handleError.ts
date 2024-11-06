import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { toastrOptions } from '../types/base/lib/lib';

toastr.options = toastrOptions;

export function handleError(error: unknown): void {
  if (error instanceof Error) {
    console.log('Виникла помилка:', error.message);
  } else {
    console.log('Виникла невідома помилка:', error);
  }

  toastr.error('Щось пішло не так. Спробуйте ще раз пізніше.');
}
