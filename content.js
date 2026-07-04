// ratechange 不冒泡，但捕獲階段仍會經過 target，一個 listener 就能管所有 video（含動態插入的）。
document.addEventListener('ratechange', (e) => {
  const v = e.target;
  if (!(v instanceof HTMLMediaElement) || v.playbackRate === 1) return;
  v.playbackRate = 1; // 重設會再觸發一次 ratechange，但那次 rate === 1，不會遞迴。
  toast();
}, true);

let toastEl, hideTimer;
function toast() {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.textContent = '看動畫就應該用 1 倍速觀看';
    Object.assign(toastEl.style, {
      position: 'fixed', top: '24px', left: '50%', transform: 'translateX(-50%)',
      zIndex: 2147483647, background: 'rgba(0,0,0,.85)', color: '#fff',
      padding: '12px 20px', borderRadius: '8px', font: '16px/1.4 sans-serif',
      pointerEvents: 'none', transition: 'opacity .3s', opacity: '0'
    });
  }
  // 全螢幕時 toast 要掛在全螢幕元素上，否則被蓋住看不到。
  const parent = document.fullscreenElement || document.body;
  if (parent && toastEl.parentElement !== parent) parent.appendChild(toastEl);
  toastEl.style.opacity = '1';
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => { toastEl.style.opacity = '0'; }, 2000);
}
