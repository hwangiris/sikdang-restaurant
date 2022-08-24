import { Toast, Modal } from 'bootstrap';
import mitt from '@/script/mitt';

export const bsToast = (id) => new Toast(document.getElementById(id));
export const bsModal = (id) => new Modal(document.getElementById(id));

export const pushMessageState = (response, msg) => {
  if (response && response.data.success) {
    mitt.emit('push-message', {
      style: 'success',
      content: response.data.message || msg,
    });
  } else {
    mitt.emit('push-message', {
      style: 'danger',
      content: msg || response.data.message,
    });
  }
};
