# PWA Support for EHCB Cardio App

## How to integrate

1. **Download and unzip** this folder into the root of your GitHub Pages repo.  
   - Ensure you do NOT overwrite your existing `index.html`, `programmes.json`, etc.

2. **Insert PWA tags** into your `index.html`:
   - In the `<head>` section, before `</head>`, add:
     ```html
     <!-- PWA manifest & icons -->
     <link rel="manifest" href="manifest.json">
     <link rel="icon" type="image/png" href="icons/logo-192.png">
     <link rel="apple-touch-icon" href="icons/logo-192.png">
     <meta name="theme-color" content="#b30000">
     ```
   - Just before `</body>`, add:
     ```html
     <script>
     if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
         navigator.serviceWorker.register('sw.js')
           .then(reg => console.log('SW registered:', reg))
           .catch(err => console.error('SW registration failed:', err));
       });
     }
     </script>
     ```

3. **Replace placeholder icons**:
   - Put your real `logo-192.png` and `logo-512.png` into the `icons/` folder.

4. **Commit & Push** to GitHub, then wait ~1-2min for Pages to deploy.

5. **Test PWA**:
   - Open in Chrome/Edge, add to home screen; 
   - On iOS Safari, use "Add to Home Screen".

Your app will now work offline and show the EHCB logo as the app icon.
