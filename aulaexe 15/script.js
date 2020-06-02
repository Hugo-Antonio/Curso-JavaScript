function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO], Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "Homem"
            if (idade >=0 && idade <10){
                genero = "Menino"
                img.setAttribute('src', 'foto-bebe-h.png')
            }else if(idade < 21){
                genero = "Adolescente (rapaz)"
                img.setAttribute('src', 'foto-adolescente-h.png')
            }else if(idade < 58){
                genero = "Jovem rapaz"
                img.setAttribute('src', 'foto-jovem-h.png')
            }else{
                genero = "Idoso "
                img.setAttribute('src', 'foto-idoso-h.png')
            }
                
            
        
        }else if(fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                genero = "Menina"
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade<21){
                genero = "Adolescente (moça)"
                img.setAttribute('src', 'foto-adolescente-m.png')
            }else if ( idade < 58){
                genero = "Jovem moça"
                img.setAttribute('src', 'foto-jovem-m.png')
            }else {
                genero = "Idosa"
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign ='Center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
        
    }
}
