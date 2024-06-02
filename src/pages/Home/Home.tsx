import React from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';


export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps>  = ({}) => {

	// const pageSize = 5
	
	const columnas = [{
		field: 'name',
		headerName: 'Nombre',
		flex: 1,
		minwidth: 150,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Categorías',
			flex: 1,
			minwidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	]

	return (
		<div>
 			<DataGrid
				rows={People}
				columns={columnas}
				disableColumnSelector
				disableRowSelectionOnClick
				autoHeight
				pageSizeOptions={[1,1,1]}

			/>
 		</div>
	);
};

export default Home;
