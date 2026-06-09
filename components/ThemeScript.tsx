const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark';document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})();`

const entryScript = basePath
  ? `(function(){try{var b='${basePath}';var p=window.location.pathname;if(p===b||p===b+'/'){if(window.location.hash){history.replaceState(null,'',p+'/');}window.scrollTo(0,0);}if('scrollRestoration' in history){history.scrollRestoration='manual';}}catch(e){}})();`
  : `(function(){try{var p=window.location.pathname;if(p==='/'||p===''){if(window.location.hash){history.replaceState(null,'',p||'/');}window.scrollTo(0,0);}if('scrollRestoration' in history){history.scrollRestoration='manual';}}catch(e){}})();`

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: entryScript + themeScript }} />
}
