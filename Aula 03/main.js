
var listaFilmes = [] 

listaFilmes[0] = 'https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg'
listaFilmes[1] = 'https://br.web.img3.acsta.net/medias/nmedia/18/93/01/50/20230712.jpg'
listaFilmes[2] = 'https://img.elo7.com.br/product/original/2657A05/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo2-90x60-geek.jpg'
listaFilmes[3] = 'https://vortexcultural.com.br/images/2016/11/Harry-Potter-e-o-C%C3%A1lice-de-Fogo.jpg'
listaFilmes[4] = 'https://br.web.img3.acsta.net/medias/nmedia/18/90/67/58/20107766.jpg'

for (var i=0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>')
}
