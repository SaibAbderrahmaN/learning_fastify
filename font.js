window.addEventListener('load', async () => {
    const service = await navigator.serviceWorker.register('./worker.js')
    console.log('Service', service)
})


async function aboneOl() {
    const worker = await navigator.serviceWorker.ready
    const clientId = await worker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BApyr7uoyJ84w3-2Z2OMtFm5FOX1qfOUdZ-lw11_CIHNV2xkalgTmpKO71ikN7u1yIfMkwfgE6pndoyu1iQ73Gw'
    })

    console.log(JSON.stringify(clientId))
}

async function abonelikIptal() {
    const worker = await navigator.serviceWorker.ready
    const subscriber = await worker.pushManager.getSubscription();
    subscriber.unsubscribe();
}