function generar(){
    var sujeto = ['juan','carlos','jose','luis'];
    var verbo = ['come','baila','duerme','respira'];
    var predicado = ['reinas pepeadas','tango','en hamaca','lento'];
    var complemento = ['en la arepera','con alicia','en el patio','en el sauna'];
    var s = sujeto[Math.floor((Math.random()*3+1))];
    var v = verbo[Math.floor((Math.random()*3+1))];
    var p = predicado[Math.floor((Math.random()*3+1))];
    var c = complemento[Math.floor((Math.random()*3+1))];
    var tex = "<p style='font-size:35px;'>"+"Porque siempre tienes una excusa!"+"</p>"+"<br>"+"<h1>"+s+" "+v+" "+p+" "+c+"</h1>";
    var aux = document.getElementById('div1');
    aux.innerHTML = tex;
}