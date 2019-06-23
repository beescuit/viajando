const DRPC = require('discord-rpc')
const clientId = '525828498758041600'

const client = new DRPC.Client({ transport: 'ipc' })

// Timestamp de quando eu volto
const arrival = 1576084800

setInterval(update, 15000)

function update () {
  const days = Math.round((arrival - Date.now() / 1000) / (60 * 60 * 24))
  if (days > 1) {
    client.setActivity({
      details: '💻 Sem acesso a internet',
      state: `📅 ${days} dias restantes`,
      largeImageKey: 'travel',
      largeImageText: 'Viajando',
      instance: false
    })
  } else {
    client.setActivity({
      details: '💻 Sem acesso a internet',
      endTimestamp: arrival,
      largeImageKey: 'travel',
      largeImageText: 'Viajando',
      instance: false
    })
  }
}

client.login({ clientId }).catch(console.error).then(update)
