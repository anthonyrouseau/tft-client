import React from 'react';
import {XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import {PlacementCounts, TraitCounts, UnitCounts, GetFilters} from '../DataHelpers';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import FilterGroup from './FilterGroup';
import LoadingSpinner from './LoadingSpinner';


function DataVis(props) {
    const [selected, setSelected] = React.useState({traits:[], units:[]})
    const [placementCounts, setPlacementCounts] = React.useState(null);
    const [filters, setFilters] = React.useState(null);
    let matches = props.matches;
    React.useEffect(() => {
        if(matches.length > 0){
            setPlacementCounts(PlacementCounts(matches, selected));
            //setTraitCounts(TraitCounts(matches));
            //setUnitCounts(UnitCounts(matches));
            setFilters(GetFilters(matches));
        }
    }, [matches, selected])
    return (
        <Card>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>
                    {matches.length > 0 ? 
                        <XYPlot height={400} width={1000} xType="ordinal" margin={{bottom: 100}}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis tickLabelAngle={315} height={100}/>
                            <YAxis/>
                            <VerticalBarSeries data={placementCounts}/>
                        </XYPlot> : 
                        <LoadingSpinner /> }
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {filters && <FilterGroup filters={filters} setSelected={setSelected} selected={selected}/>}
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
        
    );
}

export default DataVis;