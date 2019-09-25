  $( function() {
     var  totalMonthAvailable,
          totalDayAvailable,
          accumulation,
          totalSpend,
          percent;

    $('input').keyup(function () {

        //Доход
        var incomeSalary = +($('#income-salary').val()),
            incomeFreelance = +($('#income-freelance').val()),
            incomeExtraFirst = +($('#income-extra-first').val()),
            incomeExtraSecond = +($('#income-extra-second').val());

        //Расход
        var flatCost = +($('#flat-cost').val()),
            houseService = +($('#house-service').val()),
            transportCosts = +($('#transport-costs').val()),
            creditCosts = +($('#credit-costs').val());

        var totalIncomeMonth = incomeSalary + incomeFreelance + incomeExtraFirst + incomeExtraSecond,
            totalOutcomeMonth = flatCost + houseService + transportCosts + creditCosts;
   
    $('#month-available').val(totalIncomeMonth - totalOutcomeMonth - accumulation);
      totalMonthAvailable = $('#month-available').val();
    
     calculation();

    });

    function calculation() {

      $('#accumulation').val(+(totalMonthAvailable - (totalMonthAvailable - percent * totalMonthAvailable / 100)));
      accumulation = $('#accumulation').val();
    
      $('#total-spend').val(+(totalMonthAvailable - accumulation));
      totalSpend = +$('#total-spend').val();

      $('#day-available').val(+(totalSpend / 30));
      totalDayAvailable = +$('day-available').val();

      $('#total-year').val(+(accumulation * 12));
    }

      

   
    $( "#slider-range" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 100,
        slide: function( event, ui ) {
            $('#percent').val(ui.value);
            percent = +$('#percent').val();
            calculation();
        }
    });
    $('#percent').val( $( "#slider-range" ).slider( "value" ));
} );