

const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")
const currencyselect2 = document.querySelector(".currency-select-2")

function convertvalues() {
  const inputcurrencyvalue = document.querySelector(".input-currency").value
  const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
  const currencyvalueconverted = document.querySelector(".currency-value")



  const dolartoday = 4.92
  const eurotoday = 5.37
  const libratoday = 6.23
  const bitcontoday = 186990.58


  currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
    .format(inputcurrencyvalue)
  

  if (currencyselect.value == "dolar") {

    currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    })
      .format(inputcurrencyvalue / dolartoday)

  }

  if (currencyselect.value == "euro") {

    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    })
      .format(inputcurrencyvalue / eurotoday)

  }

  if (currencyselect.value == "libra") {

    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-De", {
      style: "currency",
      currency: "GBP"
    })
      .format(inputcurrencyvalue / libratoday)

  }


  if (currencyselect.value == "bitcon") {

    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    })
      .format(inputcurrencyvalue / bitcontoday)

  }

  


  // CONVERTENDO DOLAR PARA OUTRAS MOEDAS !!//


  if (currencyselect2.value == "dolar" && currencyselect.value == "dolar") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputcurrencyvalue)
  }

  if (currencyselect2.value == "dolar" && currencyselect.value == "Real") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputcurrencyvalue * dolartoday)
  }

  if (currencyselect2.value == "dolar" && currencyselect.value == "euro") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputcurrencyvalue * 0.92)
  }

  if (currencyselect2.value == "dolar" && currencyselect.value == "libra") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP"
    }).format(inputcurrencyvalue * 0.79)
  }

  if (currencyselect2.value == "dolar" && currencyselect.value == "bitcoin") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputcurrencyvalue * 0.000026)
  }


  //CONVERTENDO DO EURO PARA OUTRAS MOEDAS!! //


  if (currencyselect2.value == "euro" && currencyselect.value == "dolar") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputcurrencyvalue * 1.09)
  }

  if (currencyselect2.value == "euro" && currencyselect.value == "Real") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputcurrencyvalue * eurotoday)
  }

  if (currencyselect2.value == "euro" && currencyselect.value == "euro") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputcurrencyvalue)
  }

  if (currencyselect2.value == "euro" && currencyselect.value == "libra") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP"
    }).format(inputcurrencyvalue * 0.86)
  }

  if (currencyselect2.value == "euro" && currencyselect.value == "bitcoin") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputcurrencyvalue * 0.000028)
  }



}

function changecurrency() {

  const currencyname = document.getElementById("currency-name")
  const currencyimage = document.querySelector(".currency-img")

  if (currencyselect.value == "Real") {
    currencyname.innerHTML = "Real"
    currencyimage.src = "./assets/brasil.png"

  }

  if (currencyselect.value == "dolar") {
    currencyname.innerHTML = "dolar americano"
    currencyimage.src = "./assets/USA.png"

  }

  if (currencyselect.value == "euro") {
    currencyname.innerHTML = "euro"
    currencyimage.src = "./assets/euro.png"

  }

  if (currencyselect.value == "libra") {
    currencyname.innerHTML = "libra"
    currencyimage.src = "./assets/libra.png"

  }

  if (currencyselect.value == "bitcon") {
    currencyname.innerHTML = "bitcon"
    currencyimage.src = "./assets/bitcon.png"

  }

  convertvalues()

}
  
  
  
function valuetoconvert() {

  const currency = document.querySelector(".currency")
  const currencyTopImg = document.querySelector(".brasil")


 
  if (currencyselect2.value == "Real") {
    currency.innerHTML = "Real"
    currencyTopImg.src = "./assets/brasil.png"
  }

  if (currencyselect2.value == "dolar") {
    currency.innerHTML = "Dólar Americano"
    currencyTopImg.src = "./assets/USA.png"
  }

  if (currencyselect2.value == "euro") {
    currency.innerHTML = "euro"
    currencyTopImg.src = "./assets/euro.png"
  }

  if (currencyselect2.value == "libra") {
    currency.innerHTML = "Libra"
    currencyTopImg.src = "./assets/libra.png"
  }

  if (currencyselect2.value == "bitcon") {
    currency.innerHTML = "Bitcon"
    currencyTopImg.src = "./assets/bitcon.png"
  }



}



currencyselect2.addEventListener("change", valuetoconvert)
currencyselect.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalues)