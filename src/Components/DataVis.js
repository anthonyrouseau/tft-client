import React from 'react';
import {XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import {PlacementCounts, TraitCounts, UnitCounts, GetFilters} from '../DataHelpers';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import FilterGroup from './FilterGroup';


function DataVis(props) {
    const [selected, setSelected] = React.useState({traits:[], units:[]})
    let matches = props.matches;
    let placementCounts = PlacementCounts(matches, selected);
    let traitCounts = TraitCounts(matches);
    let unitCounts = UnitCounts(matches);
    let filters = matches.length > 0 ? GetFilters(matches) : null;
    return (
        <Card>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>
                        <XYPlot height={400} width={1000} xType="ordinal" margin={{bottom: 100}}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis tickLabelAngle={315} height={100}/>
                            <YAxis/>
                            <VerticalBarSeries data={placementCounts}/>
                        </XYPlot>
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