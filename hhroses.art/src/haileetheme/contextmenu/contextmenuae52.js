document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('win98-menu');
  let lastRightClickedElement = null;
  let savedSelection = { start: 0, end: 0 };

  // when running inside an iframe, listen for action requests from parent
  if (window.self !== window.top) {
    window.addEventListener('message', (e) => {
      if (!e.data || !e.data.type) return;
      const input = lastRightClickedElement;

      if (e.data.type === 'ctx-request-cut') {
        if (!input || input.value === undefined) return;
        const { start, end } = savedSelection;
        if (start === end) return;
        const cutText = input.value.slice(start, end);
        input.value = input.value.slice(0, start) + input.value.slice(end);
        input.setSelectionRange(start, start);
        input.focus();
        try { e.source.postMessage({ type: 'ctx-clipboard-write', text: cutText }, '*'); } catch (err) {}
      }

      else if (e.data.type === 'ctx-request-copy') {
        if (!input || input.value === undefined) return;
        const { start, end } = savedSelection;
        const text = start !== end ? input.value.slice(start, end) : input.value;
        try { e.source.postMessage({ type: 'ctx-clipboard-write', text: text }, '*'); } catch (err) {}
      }

      else if (e.data.type === 'ctx-do-paste') {
        if (!input || input.value === undefined) return;
        const { start, end } = savedSelection;
        input.value = input.value.slice(0, start) + e.data.text + input.value.slice(end);
        input.setSelectionRange(start + e.data.text.length, start + e.data.text.length);
        input.focus();
      }
    });
  }

  document.addEventListener('contextmenu', (e) => {
    // Opt-out: allow native browser menu on flagged elements
    if (e.target.closest && e.target.closest('.no-context-menu')) {
      return;
    }

    // If we're inside an iframe, forward coords to parent instead of showing locally
    if (window.self !== window.top) {
      e.preventDefault();

      let appId = null;
      const host = e.target.closest('[data-app-id], [onclick*="openApp"]');
      if (host) {
        appId = host.dataset.appId;
        if (!appId && host.getAttribute('onclick')) {
          const m = host.getAttribute('onclick').match(/openApp\(\s*['"]?([^'")\s,]+)/);
          if (m) appId = m[1];
        }
      }

      const rect2 = window.frameElement
        ? window.frameElement.getBoundingClientRect()
        : { left: 0, top: 0 };

      const tgt = e.target;
      const isEditable =
        tgt.tagName === 'TEXTAREA' ||
        (tgt.tagName === 'INPUT' && /^(text|search|url|tel|email|password|number)$/i.test(tgt.type)) ||
        tgt.isContentEditable;
      const hasSelection = isEditable && tgt.selectionStart !== tgt.selectionEnd;
      const isImage = tgt.tagName === 'IMG';

      // save locally so the parent can ask us to operate on this element later
      lastRightClickedElement = e.target;
      if (e.target.selectionStart !== undefined) {
        savedSelection = { start: e.target.selectionStart, end: e.target.selectionEnd };
      }

      try {
        window.parent.postMessage({
          type: 'show-context-menu',
          x: e.clientX + rect2.left + window.parent.scrollX,
          y: e.clientY + rect2.top + window.parent.scrollY,
          appId: appId,
          canCutCopy: hasSelection || isImage,
          isEditable: isEditable && !tgt.readOnly && !tgt.disabled,
          hasSelection: hasSelection
        }, '*');
      } catch (err) { /* cross-origin parent, ignore */ }
      return;
    }

    e.preventDefault();

    lastRightClickedElement = e.target;
    window.ctxSourceWindow = null;
    if (e.target.selectionStart !== undefined) {
      savedSelection = { start: e.target.selectionStart, end: e.target.selectionEnd };
    }

    // detect openApp target
    const openItem = document.getElementById('ctxOpenApp');
    const openSep  = document.getElementById('ctxOpenSeparator');
    window.ctxAppId = null;
    const host = e.target.closest('[data-app-id], [onclick*="openApp"]');
    if (host) {
      let appId = host.dataset.appId;
      if (!appId && host.getAttribute('onclick')) {
        const m = host.getAttribute('onclick').match(/openApp\(\s*['"]?([^'")\s,]+)/);
        if (m) appId = m[1];
      }
      window.ctxAppId = appId || null;
    }
    if (openItem && openSep) {
      const show = window.ctxAppId ? 'block' : 'none';
      openItem.style.display = show;
      openSep.style.display  = show;
    }

    // enable/disable cut/copy/paste based on context
    const target = e.target;
    const isEditable =
      target.tagName === 'TEXTAREA' ||
      (target.tagName === 'INPUT' && /^(text|search|url|tel|email|password|number)$/i.test(target.type)) ||
      target.isContentEditable;
    const hasSelection = isEditable && target.selectionStart !== target.selectionEnd;
    const isImage = target.tagName === 'IMG';
    const canCutCopy = hasSelection || isImage;
    const canPaste = isEditable && !target.readOnly && !target.disabled;

    const cutItem   = document.getElementById('ctxCut');
    const copyItem  = document.getElementById('ctxCopy');
    const pasteItem = document.getElementById('ctxPaste');
    if (cutItem)   cutItem.classList.toggle('disabled', !canCutCopy || !isEditable);
    if (copyItem)  copyItem.classList.toggle('disabled', !canCutCopy);
    if (pasteItem) pasteItem.classList.toggle('disabled', !canPaste);

    menu.style.display = 'block';
    menu.style.left = e.pageX + 'px';
    menu.style.top  = e.pageY + 'px';
  });

  window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'show-context-menu' && window.self === window.top) {
      lastRightClickedElement = null;
      window.ctxSourceWindow = e.source;
      window.ctxAppId = e.data.appId || null;

      const openItem = document.getElementById('ctxOpenApp');
      const openSep  = document.getElementById('ctxOpenSeparator');
      if (openItem && openSep) {
        const show = window.ctxAppId ? 'block' : 'none';
        openItem.style.display = show;
        openSep.style.display  = show;
      }

      // enable/disable cut/copy/paste based on data sent from iframe
      const cutItem   = document.getElementById('ctxCut');
      const copyItem  = document.getElementById('ctxCopy');
      const pasteItem = document.getElementById('ctxPaste');
      if (cutItem)   cutItem.classList.toggle('disabled', !e.data.hasSelection);
      if (copyItem)  copyItem.classList.toggle('disabled', !e.data.canCutCopy);
      if (pasteItem) pasteItem.classList.toggle('disabled', !e.data.isEditable);

      menu.style.display = 'block';
      menu.style.left = e.data.x + 'px';
      menu.style.top  = e.data.y + 'px';
    }

    if (e.data && e.data.type === 'ctx-clipboard-write' && window.self === window.top) {
      navigator.clipboard.writeText(e.data.text).catch(err => console.error("Clipboard write failed:", err));
    }
  });

  document.addEventListener('mousedown', (e) => {
    if (!menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });

  window.closeMenu = function() { menu.style.display = 'none'; }

  window.handleCut = function() {
    closeMenu();
    if (window.ctxSourceWindow) {
      window.ctxSourceWindow.postMessage({ type: 'ctx-request-cut' }, '*');
      return;
    }
    const input = lastRightClickedElement;
    if (!input || input.value === undefined) return;
    const { start, end } = savedSelection;
    if (start !== end) {
      const cutText = input.value.slice(start, end);
      input.value = input.value.slice(0, start) + input.value.slice(end);
      navigator.clipboard.writeText(cutText).catch(err => console.error("Cut failed:", err));
      input.setSelectionRange(start, start);
      input.focus();
    }
  };

  window.copyToClipboard = function() {
    closeMenu();
    if (window.ctxSourceWindow) {
      window.ctxSourceWindow.postMessage({ type: 'ctx-request-copy' }, '*');
      return;
    }
    const input = lastRightClickedElement;
    if (!input || input.value === undefined) return;
    const { start, end } = savedSelection;
    const textToCopy = start !== end ? input.value.slice(start, end) : input.value;
    navigator.clipboard.writeText(textToCopy).catch(err => console.error("Copy failed:", err));
  };

  window.pasteToElement = async function() {
    closeMenu();
    if (window.ctxSourceWindow) {
      try {
        const text = await navigator.clipboard.readText();
        window.ctxSourceWindow.postMessage({ type: 'ctx-do-paste', text: text }, '*');
      } catch (err) {
        console.error('Paste read failed:', err);
      }
      return;
    }
    const input = lastRightClickedElement;
    if (!input || input.value === undefined) return;
    try {
      const text = await navigator.clipboard.readText();
      const { start, end } = savedSelection;
      input.value = input.value.slice(0, start) + text + input.value.slice(end);
      input.setSelectionRange(start + text.length, start + text.length);
      input.focus();
    } catch (err) {
      console.error('Paste failed:', err);
    }
  };

  window.ctxOpenApp = function() {
    closeMenu();
    if (window.ctxAppId && typeof openApp === 'function') {
      openApp(window.ctxAppId);
    }
  };
});