let colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

//Grafico Visao Geral

let chart1= new Chart(document.getElementById("chart1"),{
    type:'line',
    data:{
        labels:['JANEIRO','FEVEREIRO','MARCO','ABRIL'],
        datasets:[{
            label:'Ganhos',
            data:[10,100,30,80],
            backgroundColor: 'transparent',
            borderColor: colors[0],
            borderWidth: 4,
            pointBackgroundColor: colors[0],
        },
        {
            label:'Covid-19',
            data:[60,40,70,97],
            backgroundColor: colors[2],
            borderColor: colors[1],
            borderWidth: 4,
            pointBackgroundColor: colors[1],
        },
        {
            label:'Perdas',
            data:[10,8,90,71],
            backgroundColor: colors[3],
            borderColor: colors[3],
            borderWidth: 4,
            pointBackgroundColor: colors[1],
            fill:true

        }]
    },
    options:{
        scales: {
          xAxes: [{
            barPercentage: 0.4,
            categoryPercentage: 0.5
          }],
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: true
        },
        
      }
});

let chart2 = new Chart(document.getElementById("chart2"),{
  type:'bar',
  data:{
      labels:['D','S','T','Q','Q','S','S'],
      datasets:[{
          label:'Ganhos',
          data:[10,20,30,40,50,60,70],
          backgroundColor: 'transparent',
          borderColor: colors[0],
          borderWidth: 4,
          pointBackgroundColor: colors[0],
      },
      {
          label:'Covid-19',
          data:[5,10,15,20,45,67,12],
          backgroundColor: colors[3],
          borderColor: colors[1],
          borderWidth: 4,
          pointBackgroundColor: colors[1],
      },
      {
          label:'Perdas',
          data:[3,4,15,2,6,7,100],
          backgroundColor: colors[4],
          borderColor: colors[3],
          borderWidth: 4,
          pointBackgroundColor: colors[1],
          fill:true

      }]
  },
  options:{
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          categoryPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: true
      }
    }
});



let chart3 = new Chart(document.getElementById("chart3"),{

  type:'pie',
  data:{
      labels:['Pago','cancelado','Espera',],
      datasets:[{
          data:[60,10,35],
          backgroundColor: colors.slice(0,3),
          borderWidth: 0,
      }]
  },
  options:{
      cutoutPercentage: 100, 
      legend: {position:'bottom', 
      labels:{pointStyle:'circle',
      usePointStyle:true}
  }
  }
});


let chart4 = new Chart(document.getElementById("chart4"),{
  type:'doughnut',
  data:{
      labels:['Pago','cancelado','Espera','Oportunidades'],
      datasets:[{
          data:[60,10,35,100],
          backgroundColor: colors.slice(0,4),
          borderWidth: 0,
      }]
  }
});

























/*


let chart2 = new Chart(document.getElementById("chart2"),{

    type:'pie',
    data:{
        labels:['Pago','cancelado','Espera',],
        datasets:[{
            data:[60,10,35],
            backgroundColor: colors.slice(0,3),
            borderWidth: 0,
        }]
    },
    options:{
        cutoutPercentage: 85, 
        legend: {position:'bottom', 
        labels:{pointStyle:'circle',
        usePointStyle:true}
    }
    }
});


*/


















/*
//grafico pagamentos 1

let chart2 = new Chart(document.getElementById("chart2"),{

    type:'pie',
    data:{
        labels:['Pago','cancelado','Espera',],
        datasets:[{
            data:[60,10,35],
            backgroundColor: colors.slice(0,3),
            borderWidth: 0,
        }]
    },
    options:{
        cutoutPercentage: 85, 
        legend: {position:'bottom', 
        labels:{pointStyle:'circle',
        usePointStyle:true}
    }
    }
});

//grafico pagamentos 2
let chart3 = new Chart(document.getElementById("chart3"),{

    type:'pie',
    data:{
        labels:['Pago','cancelado','Espera','Oportunidades'],
        datasets:[{
            data:[60,10,35,100],
            backgroundColor: colors.slice(0,4),
            borderWidth: 0,
        }]
    },
    options:{
        cutoutPercentage: 85, 
        legend: {position:'bottom', 
        labels:{pointStyle:'circle',
        usePointStyle:true}
    }
    }
});


//grafico Clientes 


let chart4 = new Chart(document.getElementById("chart4"),{
  type:'bar',
  data:{
      labels:['D','S','T','Q','Q','S','S'],
      datasets:[{
          label:'Ganhos',
          data:[10,20,30,40,50,60,70],
          backgroundColor: 'transparent',
          borderColor: colors[0],
          borderWidth: 4,
          pointBackgroundColor: colors[0],
      },
      {
          label:'Covid-19',
          data:[5,10,15,20,45,67,12],
          backgroundColor: colors[3],
          borderColor: colors[1],
          borderWidth: 4,
          pointBackgroundColor: colors[1],
      },
      {
          label:'Perdas',
          data:[3,4,15,2,6,7,100],
          backgroundColor: colors[4],
          borderColor: colors[3],
          borderWidth: 4,
          pointBackgroundColor: colors[1],
          fill:true

      }]
  },
  options:{
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          categoryPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: true
      }
    }
});

//Grafico Apolices


let chart5 = new Chart(document.getElementById("chart5"),{
  type:'pie',
  data:{
      labels:['Pago','cancelado','Espera','Oportunidades'],
      datasets:[{
          data:[60,10,35,100],
          backgroundColor: colors.slice(0,4),
          borderWidth: 0,
      }]
  }
});
*/