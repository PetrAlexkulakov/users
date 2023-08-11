import { format } from 'date-fns';

export const formatDateFromString = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd.MM.yyyy HH:mm:ss');
};

export const formatDateFromDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };