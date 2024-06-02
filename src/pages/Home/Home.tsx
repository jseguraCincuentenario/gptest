import React, { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';
import { Person } from '@/models/people';
import { Checkbox } from '@mui/material';


export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps>  = ({}) => {

	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
	const pageSize = [5,10]

	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id)

	const handleChange = (person: Person) => {
		setSelectedPeople(findPerson(person) ? filterPerson(person) : [...selectedPeople, person])
	}
	
	const columnas = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<Checkbox size='small' checked={findPerson(params.row)}
					onChange={() => handleChange(params.row)}
				/>
			}</>
		},
		{
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
		},
		{
			field: 'company',
			headerName: 'Empresa',
			flex: 1,
			minwidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	]

	return (
		<DataGrid
			rows={People}
			columns={columnas}
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight
			pageSizeOptions={pageSize}
			initialState={{
				pagination: {
				  paginationModel: { pageSize: 5, page: 0 },
				},
			}}
			getRowId={(row: any) => row.id}
		/>
	);
};

export default Home;
