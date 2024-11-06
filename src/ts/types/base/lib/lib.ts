interface ToastrOptions {
  positionClass: string;
  closeButton: boolean;
  progressBar: boolean;
  timeOut: number;
  extendedTimeOut: number;
  preventDuplicates: boolean;
}

export const toastrOptions: ToastrOptions = {
  positionClass: 'toast-top-right',
  closeButton: true,
  progressBar: true,
  timeOut: 5000,
  extendedTimeOut: 1000,
  preventDuplicates: true,
};
