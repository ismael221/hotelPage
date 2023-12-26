$(document).ready(function(){
    $("form").submit(function(){
      event.preventDefault();

      var formValues = $(this).serialize();

      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/reservas',
        data: formValues
      })
      .done(function(data){
        alert("Reservado com sucesso"),
        console.log(data)
      })
      .fail(function(data){
        alert("Falha na reserva "+data)
      })
    })
})


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