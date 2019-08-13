import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import InputBase from '@material-ui/core/InputBase'
import DialogTitle from '@material-ui/core/DialogTitle';

const FilterMenu = (props) => {

    // console.log(props)

    const handleAgeFilter = (e) => {
        props.setAgeFilter(e.target.value)
    }
    const handleInterestsFilter = (e) => {
        props.setInterestsFilter(e.target.value)
    }
    const handleLocationFilter = (e) => {
        props.setLocationFilter(e.target.value)
    }
    const handleLanguageFilter = (e) => {
        props.setLanguageFilter(e.target.value)
    }
    const handlePlacementsFilter = (e) => {
        props.setPlacementsFilter(e.target.value)
    }
    const handleExcludedFilter = (e) => {
        props.setExcludedFilter(e.target.value)
    }

    return (
        <>
            <Dialog
                open={props.filterOpen}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Targeting Term(s)</DialogTitle>
                <DialogContent>
                    <div className="filter">
                        <InputBase
                            placeholder="Filter by age…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.ageFilter}
                            onChange={handleAgeFilter}
                        />
                    </div>
                    <div className="filter">
                        <InputBase
                            placeholder="Filter by interests…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.interestsFilter}
                            onChange={handleInterestsFilter}
                        />
                    </div>
                    <div className="filter">
                        <InputBase
                            placeholder="Filter by location…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.locationFilter}
                            onChange={handleLocationFilter}
                        />
                    </div>
                    <div className="filter">
                        <InputBase
                            placeholder="Filter by language…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.languageFilter}
                            onChange={handleLanguageFilter}
                        />
                    </div>
                    <div className="filter">
                        <InputBase
                            placeholder="Filter by placements…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.placementsFilter}
                            onChange={handlePlacementsFilter}
                        />
                    </div>
                    <div className="filter">
                        <InputBase
                            placeholder="Filter by excluded connections…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.excludedFilter}
                            onChange={handleExcludedFilter}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
};

export default FilterMenu
