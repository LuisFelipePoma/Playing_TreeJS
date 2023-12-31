import { structureInfo } from '../mocks/structure-app-info'

export function createListInfo (): void {
  const $lista = document.querySelector('#structure-items')
  structureInfo.map(item => {
    const div = generateHtmlElement(item)
    $lista?.appendChild(div)
    return null
  })
}

function generateHtmlElement ({
  tittle,
  info,
  href
}: {
  tittle: string
  info: string
  href: string | null
}): HTMLDivElement {
  const div = document.createElement('div')
  div.style.cssText = 'text-align: left;a {text-decoration: none;}}'
  div.innerHTML = `
<li>
<h4>${tittle}</h4>
<p>${info}</p>
${href != null ? `<a href="${href}" target="_blank">More info</a>` : ''}
</li>
`
  return div
}
