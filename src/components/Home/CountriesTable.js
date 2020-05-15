import React, { useState, useEffect } from 'react'
import { Loading } from '../Loading'

import styled from 'styled-components';
import DataTable from 'react-data-table-component';

export const CountriesTable = (props) => {

    const data = props.data //  [{ country_name: "A", region: "", cases: "1", new_deaths: "44", deaths: "3", serious_critical: "1", active_cases: "566", total_recovered: "56", total_cases_per_1m_population: "33" }, { country_name: "B", region: "", cases: "2", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "56", total_cases_per_1m_population: "33" }, { country_name: "C", region: "", cases: "3", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "86", total_cases_per_1m_population: "33" }, { country_name: "D", region: "", cases: "4", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "86", total_cases_per_1m_population: "33" }]

    const columns = [{
        selector: 'country_name',
        name: 'Country',
        sortable: true,
        style: {
            fontSize: '1.1em',
            fontWeight: 'bold'
        },
    }, {
        selector: 'cases',
        name: 'Confirmed',
        sortable: true,
    }, {
        selector: 'deaths',
        name: 'Total Deaths',
        sortable: true,
    }, {
        selector: 'new_deaths',
        name: 'New Deaths',
        sortable: true,
    }, {
        selector: 'serious_critical',
        name: 'Serious Critical',
        sortable: true,
    }, {
        selector: 'active_cases',
        name: 'Active',
        sortable: true,
    }, {
        selector: 'total_recovered',
        name: 'Recovered',
        sortable: true,
    },];


    const [filterText, setFilterText] = useState('');
    const handleFilterChange = (event) => {
        setFilterText(event.target.value)
    }
    const handleClear = () => {
        if (filterText) {
            setFilterText('');
        }
    };

    const filteredItems = data.filter(item => item.country_name && item.country_name.toLowerCase().includes(filterText.toLowerCase()));

    return (
        <div>
            <div class="input-group mb-3 mt-5">
                <input class="form-control" id="search" type="text" placeholder="Filter By Country Name" value={filterText} onChange={handleFilterChange} />
                <div class="input-group-append">
                    <button type="button" onClick={handleClear} class="btn btn-outline-secondary">Clear</button>
                </div>
            </div>

            <DataTable
                // title="COVID-19 Stats by Country"
                keyField="id"
                columns={columns}
                data={filteredItems}
                striped

                fixedHeader
            />
        </div>
    )
}


/* import React, { useState, useEffect } from 'react'
import { Loading } from '../Loading'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export const CountriesTable = (props) => {

    //console.log(props.data);
    //console.log(props.data.countries_stat);

    if (!props.data.countries_stat) {
        return (
            <Loading />
        )
    }

    const numberSort = (a, b, order) => {
        if (order === 'asc') {
            return parseInt(b.replace(/,/g, '')) - parseInt(a.replace(/,/g, ''));
        }
        return parseInt(a.replace(/,/g, '')) - parseInt(b.replace(/,/g, '')); // desc
    }

    const products = props.data.countries_stat //[{ country_name: "A", region: "", cases: "1", new_deaths: "44", deaths: "3", serious_critical: "1", active_cases: "566", total_recovered: "56", total_cases_per_1m_population: "33" }, { country_name: "B", region: "", cases: "2", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "56", total_cases_per_1m_population: "33" }, { country_name: "C", region: "", cases: "3", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "86", total_cases_per_1m_population: "33" }, { country_name: "D", region: "", cases: "4", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "86", total_cases_per_1m_population: "33" }]
    const columns = [{
        dataField: 'country_name',
        text: 'Country',
        sort: true
    }, {
        dataField: 'cases',
        text: 'Confirmed',
        sort: true,
        sortFunc: (a, b, order) => numberSort(a, b, order)
    }, {
        dataField: 'deaths',
        text: 'Total Deaths',
        sort: true,
        sortFunc: (a, b, order) => numberSort(a, b, order)
    }, {
        dataField: 'new_deaths',
        text: 'New Deaths',
        sort: true,
        sortFunc: (a, b, order) => numberSort(a, b, order)
    }, {
        dataField: 'serious_critical',
        text: 'Serious Critical',
        sort: true,
        sortFunc: (a, b, order) => numberSort(a, b, order)
    }, {
        dataField: 'active_cases',
        text: 'Active',
        sort: true,
        sortFunc: (a, b, order) => numberSort(a, b, order)
    }, {
        dataField: 'total_recovered',
        text: 'Recovered',
        sort: true,
        sortFunc: (a, b, order) => numberSort(a, b, order)
    },];

    const defaultSorted = [{
        dataField: 'cases',
        order: 'asc'
    }];

    const paginatinoOptions = {
        paginationSize: 4,
        pageStartIndex: 1,
        nextPageText: 'Next',
        lastPageText: 'Last',
        hidePageListOnlyOnePage: true,
        sizePerPageList: [{
            text: '50', value: 50
        }, {
            text: '100', value: 100
        }, {
            text: 'All', value: props.data.countries_stat.length
        }]
    }

    return (
        // <div class="scrolling-wrapper">
        <BootstrapTable
            wrapperClasses="table-responsive"
            bootstrap4
            keyField="id"
            data={products}
            columns={columns}
            defaultSorted={defaultSorted}
            pagination={paginationFactory(paginatinoOptions)}
        />
        // </div>
    )
}
 */

/* return (
<div>
<div class="table-title">
<div class="row">
<div class="col mt-3 mb-3">
<input type="text" id="search" class="form-control" placeholder="Search by Country" />
</div>
</div>
</div>

<table class="table table-bordered">
<thead class="bg-info">
<tr>
<th scope="col">Country</th>
<th scope="col">Confirmed</th>
<th scope="col">Total Deaths</th>
<th scope="col">New Deaths</th>
<th scope="col">Serious Critical</th>
<th scope="col">Active</th>
<th scope="col">Recovered</th>
</tr>
</thead>
<tbody>
{props.data.countries_stat.map(row => (
<tr className="text-center">
<td>{row.country_name}</td>
<td>{row.cases}</td>
<td>{row.deaths}</td>
<td>{row.new_deaths}</td>
<td>{row.serious_critical}</td>
<td>{row.active_cases}</td>
<td>{row.total_recovered}</td>
</tr>
))}

</tbody>
</table>
</div >
) */



