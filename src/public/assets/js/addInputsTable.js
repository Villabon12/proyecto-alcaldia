
let nextinput = 0;
function agregarFila(){
  nextinput++;
  fila = `<tr>
            <th scope="row">${nextinput}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href="" class="btn btn-info material-icons">create</a>
              <a href="" class="btn btn-danger material-icons">delete</a>
            </td>
          </tr>`;
  $("#filaInfo").append(fila);
}