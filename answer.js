var link = location.href.replace(/submissions\/$/, '')
copy(`// OJ: ${link}\n// Author: github.com/abhinavj004\n// Time: O()\n// Space: O()\n${Array.from(document.querySelectorAll('span[role="presentation"]')).map(x => x.textContent.replace(/[^\x00-\x7F]/g, ' ')).filter(x => !/^\s*$/g.test(x)).join('\n')}`)
