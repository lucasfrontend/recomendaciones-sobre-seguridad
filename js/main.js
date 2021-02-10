var chartColors = {
    blue: "rgb(106, 147, 181)",
    green: 'rgb(97, 123, 114)',
    red: 'rgb(196, 78, 103)',
    yellow: 'rgb(251, 177, 52)',
    purple: 'rgb(151, 109, 127)',
    purple2: 'rgb(103, 97, 116)',
    white: 'rgb(255, 255, 255)'
  };
  
  
  /*----------CANTIDAD DE SUCESOS------------------*/
  
  const ctx = document.getElementById("eventsNumber").getContext("2d");
  const chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: ["Accidentes", "Incidente grave", "Incidente", "Intervenci\u00f3n"],
      datasets: [{
        label: "Cantidad de Sucesos",
        data: [ 30, 15, 13, 23, 35],
        backgroundColor: [
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue
        ],/*
        borderColor: [
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)"
        ],
        borderWidth: 3,
        hoverBorderWidth: 0
        */
      }] 
    },
    options: {
      enabled: true,
      mode: 'nearest'	,
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
      responsive: false,
      legend: {
          position: 'bottom',
          labels: {
            fontSize: 15,
            titleFontFamily: "Encode Sans",
            boxWidth: 10,
            fontStyle: 'normal',
            padding: 20,
            usePointStyle: true,
          }
      },
      tooltips: {
        intersect	: true,
        position: 'nearest'	,
        titleFontFamily: "Encode Sans",
        titleFontSize: 15,
        titleAlign: 'center',
        titleSpacing: 0,	
        titleMarginBottom: 10,
        bodyFontFamily: "Encode Sans",
        bodyFontSize: 13,
        backgroundColor: 'rgba(0,0,0,0.5)',
        bodyAlign: 'left',
        bodySpacing: 5,
        footerFontFamily: "Encode Sans",
        footerFontSize: 0,
        footerAlign: 'left',
        caretSize: 25,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 20,
        displayColors: true,
        rtl: true,
        mode: "index",
        intersect: true
      },
      scales: {
        yAxes: [{
          barPercentage: 0.5,
          ticks: {
            fontSize: 15,
            beginAtZero: true
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
        }
        }]
      }
    }
  
  });
  


  /*-------------------------OPERACIONES MENSUALES-----------------------------*/
  
  
  const operations = document.getElementById("operations").getContext("2d");
  
  var nonCommercialOperations = {
    label: "Operaciones No Comerciales", 
    data: [50, 10, 20, 24, 9, 6, 8, 8, 17, 15, 25, 21],
    /*lineTension: 0.3,*/
    borderColor: chartColors.blue,
    /*
    
    borderDash: [5, 10],
    pointBackgroundColor: chartColors.white,
    */
    pointBorderColor: chartColors.blue,

  /*  pointHitRadius: 10, */
    pointBorderWidth: 2,
  };
  
  
  var specialicedOperations = {
    label: "Operaciones Especializadas", 
    data: [30, 5, 13, 20, 10,5, 3, 3, 10, 15, 20, 20],
    /*lineTension: 0.3,*/
    borderColor: chartColors.green,

    /*borderDash: [5, 10],*/
    pointBorderColor: chartColors.green,
    pointBackgroundColor: chartColors.white,
    pointRadius: 4,
    pointHoverRadius: 6,
  /*  pointHitRadius: 10, */
  pointBorderWidth: 2,
  };
  
  var comercialAirTransport = {
    label: "Transporte Aéreo Comercial", 
    data: [20, 15, 30, 30, 35, 30, 40, 20, 30, 5, 11, 12],
    borderColor: chartColors.red,

    /*borderDash: [5, 10],*/
    pointBorderColor: chartColors.red, 
    pointBackgroundColor: chartColors.white,
    pointRadius: 4,
    pointHoverRadius: 6,
  /*  pointHitRadius: 10, */
  pointBorderWidth: 2,
  };
  
  var desconocido = {
    label: "Desconocido",
    data: [10, 15, 20, 30, 25, 10, 5, 10, 15, 20, 30, 20],
    /*lineTension: 0,*/
    /*fill: false,*/
    borderColor: chartColors.yellow,

    /*borderDash: [5, 10],*/
    pointBorderColor: chartColors.yellow,
    pointBackgroundColor: chartColors.white,
    pointRadius: 4,
    pointHoverRadius: 6,
    pointBorderWidth: 2,
  /*  pointHitRadius: 10, */
  /*  pointBorderWidth: 0, 
   pointStyle: 'rectRounded'*/
  };

  var NationallyRegulatedOperations = {
    label: "Operaciones Nacionales Reguladas",
    data: [5, 5, 0, 10, 5, 0, 6, 17, 8, 10, 4, 9],
    /*lineTension: 0,*/
    /*fill: false,*/
    borderColor: chartColors.yellow,

    /*borderDash: [5, 10],*/
    pointBorderColor: chartColors.yellow,
    pointBackgroundColor: chartColors.white,
    pointRadius: 4,
    pointHoverRadius: 6,
    pointBorderWidth: 2,
  /*  pointHitRadius: 10, */
  /*  pointBorderWidth: 0,
   pointStyle: 'rectRounded' */
  };

  var illegal = {
    label: "Ilegales",
    data: [0, 0, 0, 0, 8, 0, 7, 7, 3, 0, 2, 1],
    /*lineTension: 0,*/
    /*fill: false,*/
    borderColor: chartColors.purple,
    backgroundColor: 'transparent',
    /*borderDash: [5, 10],
        */
    pointBorderColor: chartColors.purple,
    pointBackgroundColor: chartColors.white,
    pointRadius: 4,
    pointHoverRadius: 6,
    pointBorderWidth: 2,
  /*  pointHitRadius: 10, */
  /*  pointBorderWidth: 0, */
  pointStyle:      'point',
  
  };

  var unknown = {
    label: "Desconocido",
    data: [0, 5, 7, 8, 9, 9, 7, 8, 3, 0, 2, 1],
    /*lineTension: 0,*/
    /*fill: false,*/
    borderColor: chartColors.purple2,

    /*borderDash: [5, 10],
      backgroundColor: 'transparent',*/
    pointBorderColor: chartColors.purple2,
    pointBackgroundColor: chartColors.white,
    pointRadius: 4,
    pointHoverRadius: 6,
    pointBorderWidth: 2,
  /*  pointHitRadius: 10, */
  /*  pointBorderWidth: 0, */
  };
  
  var speedData = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      datasets:  [nonCommercialOperations, specialicedOperations, comercialAirTransport, NationallyRegulatedOperations, illegal, unknown]
  };
  
  var lineChart = new Chart(operations, {
    type: 'line',
    data: speedData,
    options: {
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
      responsive: false,
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 15,
          titleFontFamily: "Encode Sans",
          boxWidth: 10,
          fontStyle: 'normal',
          padding: 10,
          usePointStyle: true,
        }
    },    tooltips: {
      intersect	: true,
      position: 'nearest'	,
      titleFontFamily: "Encode Sans",
      titleAlign: 'center',
      titleSpacing: 0,	
      titleMarginBottom: 10,
      bodyFontFamily: "Encode Sans",
      bodyFontSize: 15,
      backgroundColor: 'rgba(0,0,0,0.5)',
      bodyAlign: 'left',
      bodySpacing: 5,
      footerFontFamily: "Encode Sans",
      footerFontSize: 50,
      footerAlign: 'left',
      caretSize: 25,
      cornerRadius: 5,
      xPadding: 20,
      yPadding: 20,
      displayColors: true,
      rtl: true,
      mode: "index",
      intersect: true
    },
      scales: {
        yAxes: [{
          barPercentage: 0.5,
          ticks: {
            fontSize: 18,
            beginAtZero: true
          },/*,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }*/
        }],
        xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            fontSize: 15,
          }   
      }]
      }
    }
  });
  
  /*-----------------------RESUMEN--------------------------- */
  
  var summary = document.getElementById("summary");
  
  var summaryData = {
      labels: [
          "Operaciones No Comerciales",
          "Operaciones especializadas",
          "Transporte aéreo comercial",
          "Operaciones Nacionales Reguladas",
          "Ilegales",
          "Desconocido"
      ],
      datasets: [
          {
              data: [57, 5, 104, 298, 7, 4],
              backgroundColor: [
                chartColors.blue,
                chartColors.green,
                chartColors.red,
                chartColors.yellow,
                chartColors.purple,
                chartColors.purple2
  
              ],
              /*
              borderColor: [
                "rgb(97, 123, 114)",
                "rgb(151, 109, 127)",
                "rgb(196, 78, 103)",
                "rgb(251, 177, 52)",
                chartColors.blue,
                "rgb(103, 97, 116)"
  
              ],
              borderWidth: 3
              */
          }]
  };
  
  var pieChart = new Chart(summary, {
    type: 'doughnut',
    data: summaryData,
    options: {
      responsive: false,
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 15,
          titleFontFamily: "Encode Sans",
          boxWidth: 10,
          fontStyle: 'normal',
          padding: 10,
          usePointStyle: true
        }
    },    
      tooltips: {
        intersect	: true,
        position: 'nearest'	,
        titleFontFamily: "Encode Sans",
        titleAlign: 'center',
        titleSpacing: 0,	
        titleMarginBottom: 10,
        bodyFontFamily: "Encode Sans",
        bodyFontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        bodyAlign: 'left',
        bodySpacing: 5,
        footerFontFamily: "Encode Sans",
        footerFontSize: 50,
        footerAlign: 'left',
        caretSize: 25,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 20,
        displayColors: true,
        rtl: true,
        mode: "index",
        intersect: true
      },
    }
  });
     
  /*----------------------------SUCESOS POR FASE DE VUELO--------------------------------------*/
  const faseDeVuelo = document.getElementById("faseDeVuelo").getContext("2d");
  const chart3 = new Chart(faseDeVuelo, {
    type: "bar",
    data: {
      labels: ["Rodaje salida", "Despegue", "Ascenso", "Crucero", "Maniobras", "Aproximación", "Descenso", "Aterrizaje", "Rodaje a plataforma", "Estacionado", "Se desconoce"],
      datasets: [{
        label: "Cantidad de Sucesos",
        data: [ 30, 15, 13, 23, 35, 30, 20, 10, 4, 6, 7, 40],
        backgroundColor: [
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue
        ],
        /*
        borderColor: [
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)"
        ],
        borderWidth: 3,
        hoverBorderWidth: 0
        */
      }] 
    },
    options: {
      responsive: false,
      legend: {
          position: 'bottom',
          align: 'end',
          fontSize: 8,
          labels: {
            fontSize: 15,
            titleFontFamily: "Encode Sans",
            boxWidth: 10,
            fontStyle: 'normal',
            padding: 0,
            usePointStyle: true
          }

      },
      tooltips: {
        intersect	: true,
        position: 'nearest'	,
        titleFontFamily: "Encode Sans",
        titleAlign: 'center',
        titleSpacing: 0,	
        titleMarginBottom: 10,
        bodyFontFamily: "Encode Sans",
        bodyFontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        bodyAlign: 'left',
        bodySpacing: 5,
        footerFontFamily: "Encode Sans",
        footerFontSize: 50,
        footerAlign: 'left',
        caretSize: 25,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 20,
        displayColors: true,
        rtl: true,
        mode: "index",
        intersect: true
      },
    /*
    fondo negro
    
    
    {
      responsive: true,
      legend: {
          position: 'bottom',
      }, */



      scales: {
        yAxes: [{
          barPercentage: 0.5,
            beginAtZero: true
          
          /*,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }*/
        }],
        xAxes: [{
          barPercentage: 0.6,
          ticks: {
            fontSize: 15,
          },
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
      }
    }
  
  });
   
  
  
  /*-----------------DOBLE DOS --------------------------*/
  
  var harmonizedCategory = document.getElementById("harmonizedCategory").getContext("2d");
  
  
  var line1 = {
    label: 'Operaciones No Comerciales',
    data: [0, 0, 15, 15, 47, 10, 30, 0],
    backgroundColor: chartColors.blue,
    /*
    borderColor: 'rgb(106, 127, 181)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line2 = {
    label: 'Operaciones Nacionales Reguladas',
    data: [0, 0, 0, 0, 0, 0, 0, 0],
    backgroundColor: chartColors.green,
    /*
    borderColor: 'rgba(99, 112, 0)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line3 = {
    label: 'Operaciones Especiales',
    data: [0, 0, 5, 0, 0, 0, 7, 0],
    backgroundColor: chartColors.red,
    /*
    borderColor: 'rgb(97, 103, 114)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line4 = {
    label: 'Ilegales',
    data: [20, 35, 70, 35, 125, 0, 80, 0],
    backgroundColor: chartColors.yellow,
    /*
    borderColor: 'rgb(251, 157, 52)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line5 = {
    label: 'No comerciales',
    data: [0, 0, 0, 0, 25, 0, 25, 0],
    backgroundColor: chartColors.purple,
    /*
    borderColor: 'rgb(103, 77, 116)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line6 = {
    label: 'Desconocidos',
    data: [0, 3, 0, 0, 3, 0, 0 , 0],
    backgroundColor: chartColors.purple2,
    /*
    borderColor: 'rgb(196, 58, 103)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var category = {
    labels: ["CFIT", "LOC-I", "RS", "GS", "OD", "MED", "OTHER", "UNK"],
    datasets: [line1, line2, line3, line4, line5, line6]
  };
  
  var chartOptions = {
    responsive: false,
    legend: {
        position: 'bottom',
        labels: {
          fontSize: 15,
          titleFontFamily: "Encode Sans",
          boxWidth: 10,
          fontStyle: 'normal',
          padding: 20,
          usePointStyle: true
        }
    },
    tooltips: {
      intersect	: true,
      position: 'nearest'	,
      titleFontFamily: "Encode Sans",
      titleAlign: 'center',
      titleSpacing: 0,	
      titleMarginBottom: 10,
      bodyFontFamily: "Encode Sans",
      bodyFontSize: 15,
      backgroundColor: 'rgba(0,0,0,0.5)',
      bodyAlign: 'left',
      bodySpacing: 5,
      footerFontFamily: "Encode Sans",
      footerFontSize: 50,
      footerAlign: 'left',
      caretSize: 25,
      cornerRadius: 5,
      xPadding: 20,
      yPadding: 20,
      displayColors: true,
      rtl: true,
      mode: "index",
      intersect: true
    },
    scales: {
      responsive: true,
      xAxes: [{
        barPercentage: 0.8,
        ticks: {
          fontSize: 15
        },
        categoryPercentage: 1,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 15,
        }   
        /*
        gridLines: {
          /*color: "rgba(0, 0, 0, 0)",
        }*/
      },
      ]
    }
  };
  
  var barChart = new Chart(harmonizedCategory, {
    type: 'bar',
    data: category,
    options: chartOptions
  });
  
  /*-----------------ACCIDENTES POR CATEGORIA --------------------------*/
  
  var accidentCategory = document.getElementById("accidentCategory").getContext("2d");

  
  var accidentes = {
    label: 'Accidentes',
    data: [0, 0, 15, 15, 47, 10, 30, 0, 10, 0, 20, 30, 0, 10, 20 , 30, 20, 10, 0, 10, 0, 0, 20, 30, 40],
    backgroundColor: "rgb(106, 147, 181)",
   /* borderColor: "rgb(1, 94, 184)",
    borderWidth: 2,
    hoverBorderWidth: 0 */
  };
  
  var accidentesFatales = {
    label: 'Accidentes Fatales',
    data: [10, 0, 10, 50, 0, 20, 0, 10, 10, 20, 0, 5, 0, 10, 0, 20, 10, 0, 10, 20, 10, 0, 0, 10, 30],
    backgroundColor: "rgb(45, 44, 43)",
    /*
    borderColor: "rgb(45, 24, 43)",
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var categoryA = {
    labels: ["SCF-PP", "ARC", "LOC-I", "RE", "LALT", "LOC-G", "F-POST", "CTOL", "ADRM", "OTROS", "FUEL", "CFIT", "UIMC", "GCOL", "MAC", "RI", "USOS", "AMAC", "GTOW", "WILD", "F-NI", "ICE", "LOLI", "RAMP", "WSTRW"],
    datasets: [accidentes, accidentesFatales]
  };
  
  var chartOptions = {
    responsive: false,
    legend: {
        position: 'bottom',
        labels: {
          fontSize: 15,
          titleFontFamily: "Encode Sans",
          boxWidth: 10,
          fontStyle: 'normal',
          padding: 20,
          usePointStyle: true
        }
    },
    tooltips: {
      intersect	: true,
      position: 'nearest'	,
      titleFontFamily: "Encode Sans",
      titleAlign: 'center',
      titleSpacing: 0,	
      titleMarginBottom: 10,
      bodyFontFamily: "Encode Sans",
      bodyFontSize: 15,
      backgroundColor: 'rgba(0,0,0,0.5)',
      bodyAlign: 'left',
      bodySpacing: 5,
      footerFontFamily: "Encode Sans",
      footerFontSize: 50,
      footerAlign: 'left',
      caretSize: 25,
      cornerRadius: 5,
      xPadding: 20,
      yPadding: 20,
      displayColors: true,
      rtl: true,
      mode: "index",
      intersect: true
    },
    scales: {
      xAxes: [{
        barPercentage: 0.8,
        categoryPercentage: 1,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          fontSize: 15
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 15,
        }   
        /*
        gridLines: {
          /*color: "rgba(0, 0, 0, 0)",
        }*/
      },
      ]
    }
  };
  
  var barChart = new Chart(accidentCategory, {
    type: 'bar',
    data: categoryA,
    options: chartOptions
  });