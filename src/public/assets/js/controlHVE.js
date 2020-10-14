
$(document).ready(function () {
  contenidoCompra = `<div id="compraChecked" class="row mt-2">
                      <label for="" class="col-sm-5 col-lg-2 col-form-label txt-small">TIPO DE COMPRA:</label>
                      <div class="col-sm-2" id="selectTipoCompra">
                        <select name="tipoCompraHVE" class="custom-select mr-sm-2">
                          <option selected>Seleccione...</option>
                          {{#each tipo_compra}}
                            <option value="{{id}}">{{nombre}}</option>
                          {{/each}}
                        </select>
                      </div>
                      <label for="" class="col-sm-5 col-lg-2 col-form-label txt-small">NUMERO DEL PROCESO:</label>
                      <div class="col-sm-2">
                        <input type="text" class="form-control" name="numeroProcesoHVE">
                      </div>
                      <label for="" class="col-sm-5 col-lg-2 col-form-label txt-small">VALOR DEL PROCESO:</label>
                      <div class="col-sm-2">
                        <input type="text" class="form-control" name="valorProcesoHVE">
                      </div>
                    </div>`;
  contenidoComodato = `<div id="comodatoChecked" class="form-row col-md-12 p-0">
                        <label for="" class="col-md-5 col-lg-2 col-form-label" >NUMERO DEL PROCESO:</label>
                        <div class="col-md-10">
                          <input type="text" class="form-control mt-2" name="numeroProcesoHVE">
                        </div>
                      </div>`;

  contenidoEstadoEquipo = `<div class="row mt-2" id="fechaBajaHVE">
                            <label class="col-sm-3 col-form-label">FECHA DE LA BAJA:</label>
                            <div class="col-sm-9">
                              <input type="date" class="form-control" name="fechaBaja">
                            </div>
                          </div>
                          <div class="row mt-2" id="descripcionBajaHVE">
                            <label for="" class="col-sm-3 col-form-label">MOTIVO DE LA BAJA:</label>
                            <div class="col-sm-9">
                              <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                          </div>`;

  $("input[name=formAdquisicionHVE]:radio").change(function () {
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

  let iteradorChck = 0;
  $("input[name=unidadlectoraHVE]:checkbox").change(function () {
    iteradorChck++;
    if (iteradorChck % 2) {
      $("#dvdInput").removeAttr("disabled");
      $("#dvdInput").focus();
    } else {
      $("#dvdInput").val("");
      $("#dvdInput").prop("disabled", true);
    }
  });

  $("input[name=estadoEquipoHVE]:radio").change(function () {
    if ($(this).val() == 4) {
      $("#controlBajaHVE").append(contenidoEstadoEquipo);
    } else {
      $("#fechaBajaHVE").remove();
      $("#descripcionBajaHVE").remove();
    }
  });

  $("select[name=empresaProveedorHVE]").change(function () {
    console.log("Click", $(this).val());
  });

  /* var cadena = 'Hola "bienvenido a victorroblesweb" de Víctor Robles';
  console.log(cadena.replace(/['"]+/g, '')); */

});