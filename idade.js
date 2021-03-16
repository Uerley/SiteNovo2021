function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtdata')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique sua idade novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = window.document.getElementById('imagem')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './Fotosde/bebeh.png')

            } else if (idade < 21) {
                img.setAttribute('src', './Fotosde/JovemHomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', './Fotosde/AdultoH.png')
            } else {
                img.setAttribute('src', './Fotosde/IdosoH.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './Fotosde/bebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', './Fotosde/JovemMulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', './Fotosde/AdultaMulher.png')
            } else {
                img.setAttribute('src', './Fotosde/IdosoM.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}