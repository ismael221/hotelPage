$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:3000/reservas', // Substitua pelo caminho correto do seu endpoint
        context: $('#tabelaReservas'),
        type: 'GET',
        success: function(data){
          for(i=0;i< data.length;i++){
           $('#tabelaReservas').append("<tr>")
           $('#tabelaReservas').append("<td>" + data[i].id +"</td>")
           $('#tabelaReservas').append("<td>" + data[i].nome +"</td>")
           $('#tabelaReservas').append("<td>" + data[i].email +"</td>")
           $('#tabelaReservas').append("<td>" + data[i].dataEntrada +"</td>")
           $('#tabelaReservas').append("<td>" + data[i].dataSaida +"</td>")
           $('#tabelaReservas').append("<td>" + data[i].observacoes +"</td>")
           $('#tabelaReservas').append("<td>" + data[i].adultos +"</td>")
           $('#tabelaReservas').append("<td>" + data[i].criancas +"</td>")
           $('#tabelaReservas').append("/<tr>")
          }
        }
    });
})