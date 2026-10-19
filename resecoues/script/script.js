// Lista dos arquivo
let arquivos = ["musica_rock.mp3","musica_pop.mp3","foto_capa.png","musica_jazz.wav","podcast_ep1.mp3","foto_show.jpg","musica_indie mp3","podcast_ep2.mp3","ensaio_audio.wav","foto_banda.png","musica_samba.mp3","video_clipe.mp4"];
let recebe = prompt("Procure o trabalho:")
// apenas musicas mp3
let soMp3 = arquivos.filter(a => a.endsWith(".mp3"));

// somente o que começa com musica
let soMusicas = arquivos.filter(a => a.startsWith("musica"));

// vendo sem tem algo disponível com podcast,=
if (arquivos.includes("podcast_ep1.mp3")) {
  console.log("Achou o podcast!");
} else {
  console.log("Nao tem esse podcast!");
}

// vendo se existe aula gravada em mp3
if (arquivos.includes("aula_gravada.mp3")) {
  console.log("Achou a aula!");
} else {
  console.log("Nao tem essa aula!");
}

// mostrar tudo na tela
console.log("Todos os arquivos:");
console.log(arquivos);

console.log("So arquivos .mp3:");
console.log(soMp3);

console.log("So o que começa com 'musica':");
console.log(soMusicas);