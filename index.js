<<<<<<< HEAD
navigator.mozGetUserMedia({video:true, audio:false}, function(stream){

    var Peer = require('simple-peer')
    var peer = new Peer({
        initiator: location.hash === '#init',
        trickle: false,
        stream: stream
    })

    peer.on('signal', function (data) {
        document.getElementById('yourID').value = JSON.stringify(data)
    }) 

    document.getElementById('connect').addEventListener('click', function() {
        var otherID = JSON.parse(document.getElementById('otherID').value)
        peer.signal(otherID)
    })

    document.getElementById('send').addEventListener('click', function() {
        var yourMessage = document.getElementById('yourMessage').value
        peer.send(yourMessage)
    })

    peer.on('data', function (data) {
        document.getElementById('messages').textContent += data + '\n'
    })

    peer.on('stream', function(stream){
        var video = document.createElement('video')
        document.body.appendChild(video)

        video.src = window.URL.createObjectURL(stream)
        video.play()
    })

}, function(err){
    console.error(err)
=======
navigator.mozGetUserMedia({video:true, audio:false}, function(stream){

    var Peer = require('simple-peer')
    var peer = new Peer({
        initiator: location.hash === '#init',
        trickle: false,
        stream: stream
    })

    peer.on('signal', function (data) {
        document.getElementById('yourID').value = JSON.stringify(data)
    }) 

    document.getElementById('connect').addEventListener('click', function() {
        var otherID = JSON.parse(document.getElementById('otherID').value)
        peer.signal(otherID)
    })

    document.getElementById('send').addEventListener('click', function() {
        var yourMessage = document.getElementById('yourMessage').value
        peer.send(yourMessage)
    })

    peer.on('data', function (data) {
        document.getElementById('messages').textContent += data + '\n'
    })

    peer.on('stream', function(stream){
        var video = document.createElement('video')
        document.body.appendChild(video)

        video.src = window.URL.createObjectURL(stream)
        video.play()
    })

}, function(err){
    console.error(err)
>>>>>>> da4aa4c4c9a7251c7a6482a9f5bf9c1a587966ea
})