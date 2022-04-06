// while

x = 0;
document.write("<br>O valor de x é: " + x + "<br><br>")
while(x<5){
    document.write("<br/>O Valor de x é: " + x);
    x++
}
document.write("<br/><br>O Valor atual de x é: " + x)

// for
document.write("<br/><br/><br/>")
for(a =0; a < 10; a++){
    document.write("<br/>O valor de A é: " + a)
}

// switch   

y = 2;
switch(y){
    case 0:
        document.write("<br/>O valor de Y é: 0");
        break;
    case 1:
        document.write("<br/>O valor de y é 1");
        break;
    case 2:
        document.write("<br/><br/>O valor de Y é 2");
        break;
}