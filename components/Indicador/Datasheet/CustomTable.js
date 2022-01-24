import { StyledTable, StyledTableBody , StyledTableHeaderCell, StyledTableCell } from "styles/Components/StyledTable";

const {
  TableContainer,
  TableHead,
  TableRow,
} = require("@mui/material");


const CustomTable = ({ data }) => {

  return (
    <TableContainer>
      <StyledTable sx={{maxWidth: 500}} aria-label='Tabla de datos históricos'>
        <caption>Tabla con la evolución de los datos registrados en los últimos 5 años.</caption>
        <TableHead>
          <TableRow>
            <StyledTableHeaderCell>Año</StyledTableHeaderCell>
            <StyledTableHeaderCell>Valor</StyledTableHeaderCell>
            <StyledTableHeaderCell>Fuente de información</StyledTableHeaderCell>
          </TableRow>
        </TableHead>
        <StyledTableBody>
         {data.map((historico) => (
            <TableRow key={historico.anio}>
              <StyledTableCell>{historico.anio}</StyledTableCell>
              <StyledTableCell>{historico.valor}</StyledTableCell>
              <StyledTableCell>{historico.fuente}</StyledTableCell>
            </TableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default CustomTable;