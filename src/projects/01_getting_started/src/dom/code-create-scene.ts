import { codeCreateScene } from '../mocks/code-create-scene'
export function generateCodeCreateScene (): void {
  const $div = document.querySelector('#create-scene .example-code')
  codeCreateScene.map(step => {
    const $p = document.createElement('p')
    $p.innerText = step.description
    $div?.appendChild($p)
    const $code = document.createElement('code')
    $code.innerText = step.code
    $code.style.cssText =
      'background-color: #f1f1f1;padding: 1rem;border-radius:5%'
    $div?.appendChild($code)
    return null
  })
}
