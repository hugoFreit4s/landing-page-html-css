var table = document.createElement("table");
var container = document.getElementById("tableHere");

document.getElementById("tableHere").appendChild("table");
table.appendChild(cabecalho);
table.appendChild(corpo);

document.getElementById("test").appendChild(tabela);

tableHere.innerHTML = [
    '<table>',
    '<thead>',
    '<tr>',
    '<th>id</th>',
    '<th>col1</th>',
    '<th>col2</th>',
    '<th>col3</th>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tr>',
    '<td>1</td>',
    '<td>data</td>',
    '<td>data</td>',
    '<td>data</td>',
    '</tr>',
    '<tr>',
    '<td>2</td>',
    '<td>data</td>',
    '<td>data</td>',
    '<td>data</td>',
    '</tr>',
    '<tr>',
    '<td>3</td>',
    '<td>data</td>',
    '<td>data</td>',
    '<td>data</td>',
    '</tr>',
    '</tbody>',
    '</table>'
  ].join("\n");