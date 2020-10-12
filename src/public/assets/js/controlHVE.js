
$(document).ready(function () {
  contenidoCompra = `<div id="compraChecked" class="row mt-2">
                      <label for="" class="col-sm-3 col-form-label txt-small" id="lbl-tipo-compra">TIPO DE COMPRA:</label>
                      <div class="col-sm-2" id="selectTipoCompra">
                        <select name="tipoCompraHVE" class="custom-select mr-sm-2">
                          <option selected>Seleccione...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                        </select>
                      </div>
                      <label for="" class="col-sm-3 col-form-label txt-small" id="lbl-numero-proceso">NUMERO DEL PROCESO:</label>
                      <div class="col-sm-2">
                        <input type="text" class="form-control" name="numeroProcesoHVE">
                      </div>
                      <label for="" class="col-sm-2 col-form-label txt-small" id="lbl-valor-proceso">VALOR DEL PROCESO:</label>
                      <div class="col-sm-2">
                        <input type="text" class="form-control" name="valorProcesoHVE">
                      </div>
                    </div>`;
  contenidoComodato = `<div id="comodatoChecked" class="form-row col-md-12 p-0">
                        <label for="" class="col-md-2" >NUMERO DEL<br/>PROCESO:</label>
                        <div class="col-md-10">
                          <input type="text" class="form-control" name="numeroProcesoHVE">
                        </div>
                      </div>`;
  
  contenidoLectorDVD = `<label for="" class="col-sm-4 col-form-label txt-small">MARCA UNIDAD DE DVD/CD:</label>
                        <div class="col-sm-8 mt-2">
                          <input type="text" class="form-control" name="" value="">
                        </div>`;

  $("input[name=formAdquisicionHVE]:radio").change(function () {
    // console.log("Seleccionado ", $(this).val());
    if ($(this).val() == 1) {
      $("#comodatoChecked").remove();
      $("#contenidoAdquisicion").append(contenidoCompra);
    } else if ($(this).val() == 3) {
      $("#compraChecked").remove();
      $("#contenidoAdquisicion").append(contenidoComodato);
    } else {
      $("#compraChecked").remove();
      $("#comodatoChecked").remove();
    }
  });

  $("input[name=unidadlectoraHVE]:checkbox").change(function () {
    if ($(this).val() == "on") {
      // $("input[name=unidadlectoraHVE]:checkbox").attr("checked", true);
      // console.log("Check ", $(this).val());
      if ($("input[name=unidadlectoraHVE]:checkbox").attr("checked", false)) {
        $("input[name=unidadlectoraHVE]:checkbox").attr("checked", true)
      } else {
        $("input[name=unidadlectoraHVE]:checkbox").removeAttr("checked");
      }
    }
  });
});