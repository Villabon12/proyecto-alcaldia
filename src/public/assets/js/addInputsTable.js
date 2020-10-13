let nextinputequipo = 0;
function agregarFilaCapacidadEquipo() {
  $("#rowSinRegistro1").remove();
  nextinputequipo++;
  fila = `<tr>
            <th scope="row">${nextinputequipo}</th>
            <td><input type="text" class="form-control" name="marcaHddHVE" aria-describedby="emailHelp"></td>
            <td>
              <select class="form-control" name="tipoHddHVE">
                <option selected>Seleccione...</option>
                {{#each tipo_disco}}
                  <option value="{{id}}">{{nombre}}</option>
                {{/each}}
              </select>
            </td>
            <td>
              <div class="input-group">
                <input type="number" min="0" class="form-control" name="volumenHddHVE">
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">GB</span>
                </div>
              </div>
            </td>
          </tr>`;
  $("#filaInfoEquipo").append(fila);
}

let nextinputprocesamiento = 0;
function agregarFilaProcesamiento() {
  $("#rowSinRegistro2").remove();
  nextinputprocesamiento++;
  fila = `<tr>
            <th scope="row">${nextinputprocesamiento}</th>
            <td>
              <select class="form-control" name="nombreProcesador" id="exampleFormControlSelect1">
                <option selected>Seleccione...</option>
                {{#each procesador}}
                  <option value="{{id}}">{{nombre}}</option>
                {{/each}}
              </select>
            </td>
            <td>
              <div class="input-group">
                <input type="number" name="velocidadProcesador" min="0" class="form-control">
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">GHz</span>
                </div>
              </div>
            </td>
            <td>
              <select class="form-control" name="tipoRAM" id="exampleFormControlSelect1">
                <option selected>Seleccione...</option>
                {{#each tipo_ram}}
                  <option value="{{id}}">{{nombre}}</option>
                {{/each}}
              </select>
            </td>
            <td>
              <div class="input-group">
                <input type="number" name="velocidadRAM" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">MHz</span>
                </div>
              </div>
            </td>
          </tr>`;
  $("#filaInfoProcesamiento").append(fila);
}

$( document ).ready(function() {
  filaequipo = `<tr id="rowSinRegistro1">
                  <th scope="row" colspan="4" class="text-center">No hay registros</th>
                </tr>`;
  filaprocesamiento = `<tr id="rowSinRegistro2">
                        <th scope="row" colspan="5" class="text-center">No hay registros</th>
                      </tr>`;
  
  $("#filaInfoEquipo").append(filaequipo);
  $("#filaInfoProcesamiento").append(filaprocesamiento);
});