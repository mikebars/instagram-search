import Promise from 'bluebird';

export default function JSONP(url) {
  return new Promise(resolver);
  
  function resolver(resolve, reject) {
    const callbackName = `fn${Date.now()}`;
    
    const script = document.createElement('script');
    
    script.src = `${url}${url.indexOf('?') >= 0 ? '&' : '?'}callback=${callbackName}`;
    
    script.onerror = reject;
    
    const scriptAnchor = document.head;
    
    window[callbackName] = function handleCallback(data) {
      resolve(data);
      
      window[callbackName] = null;
      
      delete window[callbackName];
      
      scriptAnchor.removeChild(script);
    }
    
    scriptAnchor.appendChild(script);
  }
}