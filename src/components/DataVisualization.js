import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import { useData } from '../utils/dataWrangler';

const DataVisualization = () => {
  const data = useData();
  const ref = useRef();

  useEffect(() => {
    if (data && ref.current) {
      const svg = d3.select(ref.current);
      const width = +svg.attr('width');
      const height = +svg.attr('height');

      const xScale = d3Scale.scaleLinear()
        .domain(d3.extent(data, d => d.x))
        .range([0, width]);

      const yScale = d3Scale.scaleLinear()
        .domain(d3.extent(data, d => d.y))
        .range([height, 0]);

      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

      svg.append('g')
        .call(d3.axisLeft(yScale));

      svg.selectAll('.dot')
        .data(data)
        .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', d => xScale(d.x))
        .attr('cy', d => yScale(d.y))
        .attr('r', 5);
    }
  }, [data]);

  return (
    <div className="data-visualization">
      <svg ref={ref} width="500" height="500"></svg>
    </div>
  );
};

export default DataVisualization;