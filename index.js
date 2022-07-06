// ingresar el precio de costo para calcular su IVA

while(true){
    var precioCosto = parseFloat(prompt("Ingrese el precio del producto"));
    
    if(!isNaN(precioCosto) && precioCosto != null && precioCosto !=""){
        break;
    }else{
        alert(`no es numero`);
        continue;
    }
}

    precioCostoM = precioCosto.toFixed(2);
    alert("El precio de costo del producto a calcular es: "+precioCostoM);
    console.log("El precio de costo del producto a calcular es: "+precioCostoM);
    document.write("<h3> El precio de costo del producto a calcular es: "+precioCostoM+"</h3>");

    //IVA DEL PRODUCTO

    function calcularIva(precioCosto){
        return (precioCosto * 0.21)
    }

    var iva = calcularIva(precioCosto);
    ivaM= iva.toFixed(2);

    alert("El IVA del producto ingresado es: "+ivaM);
    console.log("El IVA del producto ingresado es: "+ivaM);
    document.write("<h3> El IVA del producto ingresado es: "+ivaM+"</h3>");

    //SUMAR EL IVA AL PRECIO DEL PRODUCTO

    function sumarIva(precioCosto){
        return (precioCosto + (precioCosto * 0.21));
    }

    var precioConIva = sumarIva(precioCosto);
    precioConIvaM= precioConIva.toFixed(2);

    alert("El precio del producto con IVA incluido es: "+precioConIvaM);
    console.log("El precio del producto con IVA incluido es: "+precioConIvaM);
    document.write("<h3> El IVA del producto con IVA incluido es: "+precioConIvaM+"</h3>");

    //Precio sugerido de venta

    function calculaPrecioVenta(precioConIva){
        return (precioConIva * 1.30);
    }

    var precioVenta = calculaPrecioVenta(precioConIva);
    precioVentaM= precioVenta.toFixed(2);

    alert("El precio sugerido de venta es: "+precioVentaM);
    console.log("El precio sugerido de venta es: "+precioVentaM);
    document.write("<h3> El precio sugerido de venta es: "+precioVentaM+"</h3>")
