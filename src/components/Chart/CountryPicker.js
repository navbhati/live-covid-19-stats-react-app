import React, { useState, useEffect } from 'react';

import { Loading } from '../Loading'

export const CountryPicker = (props) => {

    if (!props.countries) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <p className="lead text-center">Please select a country get started.</p>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Select a Country</label>
                </div>
                <select class="form-control" defaultValue="" onChange={(e) => props.handelCountryChange(e.target.value)} id="exampleFormControlSelect1">
                    <option selected>Choose...</option>
                    {props.countries.filter(Boolean).map((country, i) => <option key={i} value={country}>{country}</option>)}
                </select>
            </div>
        </div>
    )
}