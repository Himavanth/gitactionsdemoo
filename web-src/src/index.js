/*  */
import actions from './config.json'

window.showActionsList = () => {
  const container = document.getElementById('action-list')
  if (Object.keys(actions).length === 0) {
    container.innerHTML = '<ul><li>you have no actions, run <code>aio app add actions</code> to add one</li></ul>'
  } else {
    container.innerHTML = '<ul>' + Object.entries(actions).map(([_, url]) => `<li><a href=${url}>${url}</a></li>`).join('') + '</ul>'
  }
}
